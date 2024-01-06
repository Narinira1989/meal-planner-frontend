import './App.css';
import { useEffect, useState } from 'react';
import { MyMeals } from './MyMeals';
import { addMeal, getAllMeals, editMeal, deleteMeal } from './FetchMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div>
      <h2>MEAL PLAN</h2>
      <input type="text" 
        placeholder="Add a meal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     editing ? editMeal(mealId, title, setTitle, setMeal, setEditing) : addMeal(title, setTitle, setMeal);
        //   }
        // }}
      />


      <button 
      disabled={!title}
      onClick=
      {editing ? () => editMeal(mealId, title, setMeal, setTitle, setEditing) : () => addMeal(title, setTitle, setMeal)}>
      {editing ? "Edit" : "Add"}
      </button>

      {/* <MyMeals text= "WE GOT HERE!!"/> */}
      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id}
      updatingInInput={() => updatingInInput(meal._id, meal.title)}
      deleteMeal={() => deleteMeal(meal._id, setMeal)}/>
      )}
    </div>
  );
}

export default App;
