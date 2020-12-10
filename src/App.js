import React, { Component, useState } from "react";

import './App.css';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value };
};

const App = () => {
  const name = useInput("Mr. ");

  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} />
    </div>
  )
};

export default App;