import { useState } from 'react';
import Button from '../../buttons/Button';
import { Subtitle } from '../subtitle/subtitle';
import { Title } from '../title/title';
import { Label } from './label';

interface Props {
  className?: string;
}

export function Form({ className = '', ...props }: Props) {
  const [data, setData] = useState(() => ({
    email: '',
    phone: '',
    businessLines: '',
    yourNeeds: '',
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
    <div
      className={`bg-gray-50 pt-8 lg:bg-white lg:py-24 lg:px-0 ${className}`}
      data-aos='fade-up'
    >
      <div className='main-container mx-auto rounded-xl border-gray-50 bg-gray-50 pb-12 lg:w-2/3 lg:border lg:px-20 lg:shadow-md 2xl:w-7/12'>
        <Title text='sản phẩm của chúng tôi đã sẵn sàng' className='lg:pt-12' />
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
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-2'>
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
          <div className=''>
            <Label text='Nhu cầu của bạn là gì?' />
            <textarea
              name='yourProblem'
              className='form-control py-2 outline-none'
              rows={3}
              value={data.yourNeeds}
              onChange={handleChangeValue}
            />
          </div>
          <div className='mt-1 text-center lg:text-left'>
            <Button
              variant='primary'
              className='w-52 justify-center !py-3'
              type='submit'
            >
              ĐẶT LỊCH LIÊN HỆ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
