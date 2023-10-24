import React from "react";
import "./CardPage.css";

function CardPage() {
  return (
    <div className="card-container1">
      <div className="students-data">
        <h1 className="s1">For students</h1>
        <p className="p1">Find out colleges from all over India</p>
        <p className="p1">Check each minute details about colleges</p>
        <p className="p1">
          Check how compatible you are with college admission criteria
        </p>
        <p className="p1">Check colleges location as well as 360 view</p>
        <p className="p1">Get colleges review at one place</p>
        <p className="p1">Compare colleges as per students wish</p>
      </div>
      <div className="card-container2">
        <div className="college-data">
          <h1 className="s1">For Colleges</h1>
          <p className="p1">React out to students all over India</p>
          <p className="p1">Promote your college by typing up with us</p>
          <p className="p1">
            Check detailed data of students who searched for your college
          </p>
          <p className="p1">
            In Depth data of students who viewed,shortlisted and applied for
            your college both in graphical and tabular format
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
