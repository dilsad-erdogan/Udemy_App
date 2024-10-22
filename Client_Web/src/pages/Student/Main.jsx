import SliderHero from "../../components/Hero/SliderHero"
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar"
import Video from "../../components/Video/Video";

const Main = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StudentPageNavbar />
      <SliderHero />
      <Video isMy={false}/>
    </main>
  )
}

export default Main