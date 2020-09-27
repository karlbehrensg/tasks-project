import Navbar from "../Navbar"

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
