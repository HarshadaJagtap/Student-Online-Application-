import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <h1 className="header">What are we and who are we?</h1>
      <div className="paragraph-data">
        <p className="paragraph1">
          Aspirants is a platform that forms a bridge between candidates and
          colleges by providing candidates with all the real-time information
          needed for their desired schools/colleges in one place with just one
          click of a button.
        </p>

        <p1 className="paragraph2">
          The platform provides access to colleges to promote themselves and
          attract even more candidates to their colleges with the help of what
          services they are providing(i.e. education,placements,extra-curricular
          activities,etc.).We are trying to minimize the time taken by
          candidates to research prospective colleges they wish to join.Our
          platform provides all the real-time information for each college which
          can help the candidates to make educated decisions on their dream
          college and help them to progress in their career.
        </p1>
      </div>
    </div>
  );
}

export default Card;
