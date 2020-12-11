import React from "react";


const test = (value) => {
  const test2 = (value) => {
    console.log('---');
  }
  return test2;
}

const App = () => {
  const t = test(10);

  console.log(t(100));

  return (
    <div>Hi</div>
  );
}

export default App;