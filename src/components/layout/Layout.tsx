import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='relative min-h-screen text-gray-700 bg-white'>
      <>
        <Header />
        <div className=''>{children}</div>
      </>
    </div>
  );
}
