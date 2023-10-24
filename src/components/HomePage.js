import React, { useState } from "react";
import "./HomePage.css";
import Card from "./Card";
import CardPage from "./CardPage";

function HomePage() {
  const handleClick = () => {};
  return (
    <div className="content">
      <h1 className="header">Why Join Us?</h1>
      <p className="paragraph">
        Aspirants is a platform that forms a bridge between candidates and
        colleges by providing candidates with all the real-time information
        needed for their desired schools/colleges in one place with just one
        click of a button.
      </p>
      <button className="button-container" onClick={handleClick}>
        Get started
      </button>
      <div className="profile"></div>
      <Card />
      <h1 className="header-statistics">Statistics of year 2021-2022</h1>

      <div className="statistics-container">
        <div className="share-market"></div>
        <div className="label-container">
          <label className="text">2.73 Cr</label>
          <label className="text">3.86 Cr</label>
          <label className="text">33.62 Lakh</label>
        </div>
        <div className="label-container">
          <p className="text-students">
            Students enrolled for undergraduate Degree
          </p>
          <p className="text-students">
            Total number of Students graduating from PU and bachelors
          </p>
          <p className="text-students">
            Students enrolled for post graduate Degree
          </p>
        </div>
      </div>
      <div className="study-container">
        <div className="study"></div>
        <div className="label-container">
          <h1>How did it start?</h1>
          <p className="paragraph-study">
            We are a passionate group of individuals who came from various
            backgrounds and went through the same tedious process of searching
            for college information on various platforms before joining the
            college. We saw that there was a gap between candidates and colleges
            where student spent lot of time on various platforms to get proper
            information and make sure that they get to know each and every
            detail of their desired colleges and take decisions after doing
            thorough research on all the prospective colleges. Once candidates
            start using this platform they will be well-versed with all the
            real-time information and direct interaction with college admission
            cell and will be able to select the correct college based on the
            information our platform provides
          </p>
        </div>
      </div>
      <div>
        <h1 className="popular">Popular colleges in Engineering</h1>
        <h1 className="end-header">What we offer</h1>
        <label className="service">Our services</label>
        <CardPage />
      </div>
    </div>
  );
}

export default HomePage;
