import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const Apple = (props) => {
//   let [count, setCount] = useState(props.counter);
//   let [text, setText] = useState("");

//   const increment = () => {
//     setCount(count+1);
//   };

//   return (
//     <div>
//       <input onChange={(e) => {setText(e.target.value)}}/>
//       <p>The current {text || "count"} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={() => {setCount(props.counter)}}>reset</button>
//       <button onClick={() => {setCount(count - 1)}}>-1</button>
//     </div>
//   );
// };
const Apple = (props) => {
  let [state, setState] = useState({
    count: props.counter,
    text: "",
  });

  const increment = () => {
    setState({ ...state, count: state.count + 1 });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setState({ ...state, text: e.target.value });
        }}
      />
      <p>
        The current {state.text || "count"} is {state.count}
      </p>
      <button onClick={increment}>+1</button>
      <button
        onClick={() => {
          setState({ ...state, count: props.counter});
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setState({ ...state, count: state.count - 1});
        }}
      >
        -1
      </button>
    </div>
  );
};

Apple.defaultProps = {
  counter: 0,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Apple counter={30} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
