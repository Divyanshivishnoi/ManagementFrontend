import React from "react";
import {useState} from "react";


const TodosForm = () => {
  const[todo,setTodo]=useState("");
  const handleAddTodo=()=>{
    console.log("setTodo");
  }


  return (
    <div>
     
      <div className="border border-gray-800 h-56 w-96 px-6 py-3 ">
        <input type="text" placeholder="Name"></input>
        <br /><br/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddTodo}>
          Add Todo
        </button><br/><br/>
        <input type="checkbox" h-3 w-3></input>
      </div>
    </div>
  );
};

export default TodosForm;
