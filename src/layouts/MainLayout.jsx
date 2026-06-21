import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-11">
        {children}
      </main>
    </>
  )
}

export default MainLayout;