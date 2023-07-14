import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
{/* todo optimize */}
      <main className="p-4 min-h-[60vh]">{children}</main>
      
      <Footer />
    </>
  )
}