import React, { useState, useEffect } from "react";

const App = () => {
  const sayFirst = () => console.log("First");
  const sayHello = () => console.log("hello");

  // componentDidMount의 역할을 해서 새로고침을 하면 실행된다.
  // componentDidUpdate의 역할도 해서 아래 버튼 클릭해도 실행된다.
  // useEffect(sayHello);

  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  // 이렇게하면 number가 마운트,  변경되면 앞에 함수를 실행한다.
  useEffect(sayHello, [number]);

  // 그렇다는 말은 빈 배열을 넘기면 componentDidMount만 실행되고,
  // 뭔 지랄을 해도 아래 함수는 다시 실행되지 않는다.
  useEffect(sayFirst, []);

  return (
    <div className="App">
      <div>Hi</div>
      <p>{number}</p>
      <p>{aNumber}</p>
      <button onClick={() => setNumber(number + 1)}>위에거</button>
      <button onClick={() => setANumber(aNumber + 1)}>밑에거</button>
    </div>
  );
}

export default App;
