import React from 'react'
import TodosForm from '../TodosForm/TodosForm'
import { useState } from "react";

const Todos = () => {
      const [create, setCreate] = useState("");
    
      const handleClick = () => {
        console.log("create");
      };
    
  return (
    <div className="border border-gray-800 h-96 w-1/2 flex items-center justify-center mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg">
      <button className="text-white bg-red-600 px-5 py-3 rounded-md hover:bg-blue-700 transition"  onClick={handleClick}>
        Create
      
      </button><br/>
      <TodosForm/>
    </div>
    
  )
}

export default Todos
