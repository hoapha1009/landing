import { useState } from 'react';
import Button from '../../buttons/Button';
import { Subtitle } from '../subtitle/subtitle';
import { Title } from '../title/title';
import { Label } from './label';

export function Form() {
  const [data, setData] = useState(() => ({
    email: '',
    phone: '',
    businessLines: '',
    cultivatedArea: 0,
    numberOfCultivators: 0,
    address: '',
    reasonKnowUs: '',
    yourProblem: '',
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('data', data);
  };

  const handleChangeValue = (e) => {
    const {
      target: { name, value },
    } = e;
    let newData = { ...data };
    newData = { ...data, [name]: value };

    setData(newData);
  };

  return (
    <div className='my-16'>
      <div className='mx-auto w-2/3 rounded-xl border border-gray-50 bg-gray-50 px-24 py-12 shadow-md'>
        <Title text='sản phẩm của chúng tôi đã sẵn sàng' />
        <Subtitle text='Đăng ký đặt lịch để được trải nghiệm sớm nhất công nghệ của chúng tôi' />

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className=''>
            <Label required text='Email doanh nghiệp' />
            <input
              required
              name='email'
              className='form-control'
              type='email'
              value={data.email}
              onChange={handleChangeValue}
            />
          </div>
          <div className='flex gap-2'>
            <div className='flex-1'>
              <Label required text='Số điện thoại' />
              <input
                required
                name='phone'
                className='form-control'
                type='tel'
                value={data.phone}
                onChange={handleChangeValue}
              />
            </div>
            <div className='flex-1'>
              <Label required text='Ngành nghề kinh doanh' />
              <input
                required
                name='businessLines'
                className='form-control'
                value={data.businessLines}
                onChange={handleChangeValue}
              />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex-1'>
              <Label required text='Diện tích canh tác' />
              <input
                required
                name='cultivatedArea'
                className='form-control'
                type='number'
                min='0'
                value={data.cultivatedArea}
                onChange={handleChangeValue}
              />
            </div>
            <div className='flex-1'>
              <Label required text='Số lượng người canh tác' />
              <input
                required
                name='numberOfCultivators'
                className='form-control'
                type='number'
                min='0'
                value={data.numberOfCultivators}
                onChange={handleChangeValue}
              />
            </div>
          </div>
          <div className=''>
            <Label required text='Địa chỉ canh tác' />
            <input
              required
              name='address'
              className='form-control'
              value={data.address}
              onChange={handleChangeValue}
            />
          </div>
          <div className=''>
            <Label required text='Vì sao bạn biết đến chúng tôi?' />
            <input
              required
              name='reasonKnowUs'
              className='form-control'
              value={data.reasonKnowUs}
              onChange={handleChangeValue}
            />
          </div>
          <div className=''>
            <Label text='Vấn đề của bạn là gì?' />
            <textarea
              name='yourProblem'
              className='form-control py-2 outline-none'
              rows={3}
              value={data.yourProblem}
              onChange={handleChangeValue}
            />
          </div>
          <Button
            variant='primary'
            className='mt-1 w-52 justify-center'
            type='submit'
          >
            ĐẶT LỊCH DÙNG THỬ
          </Button>
        </form>
      </div>
    </div>
  );
}
