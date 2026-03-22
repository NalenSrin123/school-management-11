import Features from "../../app/Features";
import Footer from "../../app/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../layout/Navbar";
import CoursesCard from "./CoursesCard";


const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <CoursesCard/>
      <Features/>
    </div>
  );
};

export default Home;