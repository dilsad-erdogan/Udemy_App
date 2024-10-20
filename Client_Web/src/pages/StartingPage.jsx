import Banner from "../components/Banner"
import Hero from "../components/Hero/StartPageHero"
import StartPageNavbar from "../components/Navbar/StartPageNavbar"
import Services from "../components/Services"

const StartingPage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StartPageNavbar />
      <Hero />
      <Services />
      <Banner />
    </main>
  )
}

export default StartingPage