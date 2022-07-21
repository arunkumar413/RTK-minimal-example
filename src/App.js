import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount
} from "./stateManagement/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}> increment </button>
      <h5> {count} </h5>
      <button onClick={() => dispatch(decrement())}> decrement </button>{" "}
    </div>
  );
}

export default App;
