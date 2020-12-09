import React, { Component, useState } from "react";

import './App.css';

const App = () => {
  // userState는 2개를 리턴한다. 하나는 value, 두 번째는 이를 변경하는 방법
  // useState는 Array를 리턴한다.
  // count의 경우엔 useState의 value인 0을 받는다.
  // 보통은 첫 번째에 abc라고 지으면, 두 번째엔 setAbc라고 짓는다.
  const [potato, kimchi] = useState(0);
  const [email, setEmail] = useState("");
  const plusPotato = () => kimchi(potato + 1);
  const updateEmail = e => {
    // const value = e.target.value;
    const { target: { value } } = e;
    setEmail(value);
  };
  return (
    <div>
      {potato}
      <button onClick={plusPotato}>Increment</button>
      <button onClick={() => kimchi(potato - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </div>
  )
}

export default App;
