import Features from "../../app/Features";
import Footer from "../../app/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../layout/Navbar";
import CoursesCard from "./CoursesCard";
import PopularCourse from "./PopularCourse";


const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden">
      <HeroSection />
      <CoursesCard/>
      <PopularCourse/>
      <Features/>
    </div>
  );
};

export default Home;