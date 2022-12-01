import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Apple = (props) => {
  let [count, setCount] = useState(props.counter);
  let [text, setText] = useState("");

  const increment = () => {
    setCount(count+1);
  };

  return (
    <div>
      <input onChange={(e) => {setText(e.target.value)}}/>
      <p>The current {text || "count"} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => {setCount(props.counter)}}>reset</button>
      <button onClick={() => {setCount(count - 1)}}>-1</button>
    </div>
  );
};

Apple.defaultProps = {
  counter: 0
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Apple counter={30}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
