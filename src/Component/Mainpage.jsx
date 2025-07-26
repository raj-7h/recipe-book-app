import React, { useEffect, useState } from "react";
import { MealCards } from "./MealCards";
import { Loading } from "./Loading";
const apiKey = import.meta.env.VITE_API_KEY;

export const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    if (query.trim() === "") {
      setMsg("Please enter something");
      setData([]);
      return;
    } else {
      setMsg("");
      setLoading(true);
      try {
        const get = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true`
        );
        const jsonData = await get.json();

        if (jsonData.results?.length) {
          setData(jsonData.results);
        } else {
          setMsg("No recipes found");
          setData([]);
        }
      } catch (err) {
        console.log(err);
        setMsg("Error fetching recipes.");
        setData([]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchRecipes("all");
  }, []);

  const handleSearch = () => {
    fetchRecipes(search);
  };
  // console.log(data);
  return (
    <div className="main-container">
      <h1 className="main-title">Recipe Book 🍽️</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter dish name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {msg && <p className="message">{msg}</p>}
      {loading ? (
        <Loading />
      ) : (
        <div className="card-container">
          <MealCards detail={data} />
        </div>
      )}
    </div>
  );
};
