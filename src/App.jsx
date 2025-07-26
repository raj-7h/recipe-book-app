import "./App.css";
import { Mainpage } from "./Component/Mainpage";
import { Route, Routes } from "react-router-dom";
import { MealInfo } from "./Component/MealInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/detail/:mealid" element={<MealInfo />} />
    </Routes>
  );
}

export default App;
