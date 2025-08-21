import React, { useEffect, useState } from "react";
import "./meal.css"; // Assuming you have a CSS file for styling
const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputData, setInputData] = useState("");
  useEffect(() => {
    // Fetch meal data from API
    const fetchMealData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
        );
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    fetchMealData();
  }, [area]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Searching for meal:", inputData);
    // setArea(inputData);
    const fetchSearchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
        );
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };
    fetchSearchData();
    setInputData(""); // Clear input field after search

  };

  return (
    <>
      {/* <div>Meal</div> */}
      <div>
        {/* <h1>Meal Recipes</h1> */}
        <div className="mx-auto text-center" style={{ marginTop: "20px", flexWrap:'wrap', gap: '10px'  }}>
        <button
          onClick={() => setArea("Indian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("american")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          American
        </button>
        <button
          onClick={() => setArea("thai")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Thai
        </button>
        <button
          onClick={() => setArea("british")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          British
        </button>
        <button
          onClick={() => setArea("russian")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Russian
        </button>
        <button
          onClick={() => setArea("chinese")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          Chinese
        </button>
        <button
          onClick={() => setArea("japanese")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Japanese
        </button>
      </div>
      <form onSubmit={submitHandler} className="mx-auto text-center my-4">
        <input
          type="text"
          placeholder="Search for a meal..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </form>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
            // backgroundColor: "#0b0c0c",
          }}
        >
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal.idMeal} style={{ textAlign: "center" }}>
                <div>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{
                      borderRadius: "10px",
                      width: "220px",
                      height: "220px",
                      border: "2px solid #ccc",
                    }}
                  />
                </div>
                <h4>{meal.strMeal}</h4>
              </div>
            ))
          ) : (
            <p>Loading meals...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Meal;
