import React from "react";
import "../../assets/styles/PopularCurses.css"
function CourseCard({image,title,category,rating}) {
  return (
    <div className="course-card">

      <div className="card-image">
        <img src={image} alt="course"/>
        <span className="zoom">📹 Zoom</span>
       <span 
  className="heart" 
  style={{ 
    width: "40px",
    color: "white",
    fontSize: "28px"
  
  }}
>
♡
</span>
      </div>
      <div className="card-body">

        <p className="category">{category}</p>

        <h3>{title}</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>{rating}</span>
        </div>

        <button className="enroll">Enroll now</button>

      </div>

    </div>
  );
}

export default CourseCard;
