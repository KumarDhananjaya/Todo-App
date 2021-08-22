import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Move out ", " hey ", " come on boy "]);
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();
    console.log("im working");
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Programmers 🚀</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          {" "}
          Add Todo{" "}
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
