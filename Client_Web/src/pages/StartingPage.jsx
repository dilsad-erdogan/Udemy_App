import Banner from "../components/Banner";
import Hero from "../components/Hero/StartPageHero";
import StartPageNavbar from "../components/Navbar/StartPageNavbar";
import Services from "../components/Services";

const StartingPage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StartPageNavbar />
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Banner /></section>
    </main>
  );
};

export default StartingPage;