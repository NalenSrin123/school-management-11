import Footer from "../../app/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../layout/Navbar";


const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <Footer/>
    </div>
  );
};

export default Home;