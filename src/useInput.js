import React, { Component, useState } from "react";

import './App.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      // validator(value) 함수의 결과는 App에 선언한 maxLen의 결과와 같다.
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange };
};

const App = () => {
  // const maxLen = (value) => value.length <= 10;
  const chk = (value) => !value.includes("@");
  const name = useInput("Mr. ", chk);

  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  )
};

export default App;