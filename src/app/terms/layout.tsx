import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow mt-[73px]">
        {children}
      </main>
      <Footer />
    </div>
  )
} 