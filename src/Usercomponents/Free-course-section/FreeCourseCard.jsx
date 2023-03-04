import React from "react";
import Vector from "../../assests/images/Vector.png";
import '../../style.css';


const FreeCourseCard = (props) => {
  const { imgUrl, title, students,desc} = props.item;

  return (
    <div className="single__free__course">
    
        {/* <img src={imgUrl} alt="" className="w-100" /> */}
        {/* <div className="timeline" style={{width:"200px", height:"200px", backgroundColor:"blue"}}></div> */}
        {/* <button className="btn free__btn">Free</button> */}
     

      <div className="free__course__details vector"  >
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          {/* <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}k
          </span> */}

          <span className=" d-flex align-items-center gap-2">
           {desc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
