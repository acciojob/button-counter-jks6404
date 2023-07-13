
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);

  return (
    <div>
      {/* <p>Hello world!</p> */}
      <p>Button clicked {time} times</p>
      <button onClick={() => {setTime(time+1)}}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App