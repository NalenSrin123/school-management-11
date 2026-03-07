import React from "react";
import CourseCard from "../components/CourseCard";
import pic from  "../../assets/images/pic.jpg.png"
import Angular from "../../assets/images/angular.jpg"
import Blazor from "../../assets/images/blazor.jpg"
import Bootstrap from "../../assets/images/bootstrap5.jpg"
import windows from "../../assets/images/window.jpg"
import corelDAW from "../../assets/images/corelDRAW.jpg"
import Docker from "../../assets/images/Docker2.jpg"
const courses = [
  {
    id:1,
    title:".NET MAUI Hybrid App",
    category:"C#",
    rating:"4.3",
    image:"https://www.syncfusion.com/blogs/wp-content/uploads/2025/04/NET-MAUI-in-.NET-10-Preview-A-Focus-on-Quality-and-the-Developer-Experience.jpg"
  },
  {
    id:2,
    title:".NET Mobile Hybrid",
    category:"C#",
    rating:"4.3",
    image:pic,
  },
  {
    id:3,
    title:"Angular-19",
    category:"Javascript",
    rating:"4.3",
    image:Angular,
  },
  {
    id:4,
    title:"Blazor Web App",
    category:"C#",
    rating:"4.3",
    image:Blazor,
  },
  {
    id:5,
    title:"Bootstrap",
    category:"HTML CSS",
    rating:"4.3",
    image:Bootstrap,
  },
  {
    id:6,
    title:"C# Desktop Applications",
    category:"JAVA",
    rating:"4.3",
    image:windows,
  },
    {
    id:7,
    title:" CorelDRAW Designer",
    category:"other",
    rating:"4.3",
    image:corelDAW,
  },
  {
    id:8,
    title:"Docker From Zero to Hero",
    category:" other",
    rating:"4.3",
    image:Docker,
  }
];

function CoursesCard() {
  return (
    <div className="courses-container">
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            category={course.category}
            rating={course.rating}
          />
        ))}
      </div>

    </div>
  );
}

export default CoursesCard;