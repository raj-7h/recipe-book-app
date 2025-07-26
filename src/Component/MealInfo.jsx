import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loading } from "./Loading";
const apiKey = import.meta.env.VITE_API_KEY;

const stripHTML = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  const text = doc.body.textContent || "";
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*[•–-]\s*/, "").trim())
    .filter(Boolean)
    .join("\n");
};

export const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  const [steps, setSteps] = useState([]);

  const recipeInfo = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${mealid}/information?apiKey=${apiKey}`
      );
      const jsonData = await res.json();
      setInfo(jsonData);

      if (
        jsonData.analyzedInstructions &&
        jsonData.analyzedInstructions.length > 0 &&
        jsonData.analyzedInstructions[0].steps
      ) {
        const extractedSteps = jsonData.analyzedInstructions[0].steps.map(
          (stepObj) => stripHTML(stepObj.step)
        );
        setSteps(extractedSteps);
      } else {
        setSteps([]);
      }
    } catch (error) {
      console.error("Error fetching meal info:", error);
    }
  };
  useEffect(() => {
    recipeInfo();
  }, []);
  return (
    <div className="mealInfo">
      {!info ? (
        <Loading />
      ) : (
        <>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Recipe Details</span>
          </div>

          <div className="meal-content">
            <img src={info.image} alt={info.title} className="meal-image" />
            <div className="meal-details">
              <h1 className="main-title">Recipe Details</h1>
              <button className="meal-title-button" disabled>
                {info.title}
              </button>

              <div className="ingredients">
                <h3 className="sectionTitle">Ingredients</h3>
                {info.extendedIngredients.map((ing, index) => (
                  <p key={index}>{ing.original}</p>
                ))}
              </div>

              <div className="instructions">
                <h3 className="sectionTitle">Instructions</h3>
                {steps.length > 0 ? (
                  steps.map((step, index) => <p key={index}>{step}</p>)
                ) : (
                  <p>No instructions available</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
