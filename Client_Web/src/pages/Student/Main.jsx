import SliderHero from "../../components/Hero/SliderHero"
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar"

const Main = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StudentPageNavbar />
      <SliderHero />
    </main>
  )
}

export default Main