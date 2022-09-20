export function AboutUsHero() {
  return (
    <div className='main-container p-16 pb-24'>
      <div className='flex flex-row justify-between'>
        <div className='mr-52 mt-32 w-[452px] max-w-md'>
          <div className='text-5xl font-semibold leading-[1.25]'>
            Công nghệ xanh Sống an lành
          </div>
          <div className='mt-4 text-xl font-medium leading-[1.5] text-gray-600'>
            Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh
            vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
          </div>
        </div>
        <img
          src='/images/about-us-hero.png'
          alt=''
          className='w-1/2 object-contain'
        />
      </div>
    </div>
  );
}
