import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
 return (
  <div
  className='relative min-h-screen bg-white text-gray-700'
  style={{
    fontFamily: 'Noto Sans',
  }}
  >
    <>
      <Header />
      <div className=''>{children}</div>
    </>
  </div>
 )
}
