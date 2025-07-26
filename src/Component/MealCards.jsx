import React from "react";
import { NavLink } from "react-router-dom";

export const MealCards = ({ detail }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "24px",
        marginTop: "40px",
      }}
    >
      {detail?.map((meal) => (
        <div className="card" key={meal.id}>
          <img src={meal.image} alt={meal.title} className="card-img" />
          <div className="card-body">
            <h3 className="card-title">{meal.title}</h3>
            <p
              className="card-description"
              style={{
                color: meal.vegetarian ? "green" : "crimson",
                fontWeight: "bold",
              }}
            >
              {meal.vegetarian === true
                ? "● Vegetarian"
                : meal.vegetarian === false
                ? "● Non-Vegetarian"
                : "❓ Unknown"}
            </p>
            <NavLink to={`/detail/${meal.id}`}>
              <button className="recipe-button">Recipe</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};
