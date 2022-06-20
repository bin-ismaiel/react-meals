import React from "react";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { id, category, area, name, img } = props;

  return (
    <article className="meal">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <h4>{area}</h4>
        <p>{category}</p>
        <Link to={`meal/${id}`}>
          <button className="btn btn-primary btn-details">details</button>
        </Link>
      </div>
    </article>
  );
};

export default Meal;
