import Hero from "../components/Hero/StartPageHero"
import StartPageNavbar from "../components/Navbar/StartPageNavbar"

const StartingPage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StartPageNavbar />
      <Hero />
    </main>
  )
}

export default StartingPage