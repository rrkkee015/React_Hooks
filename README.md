# React_Hooks
## What Are Hooks?
- functional component에서 state를 가질 수 있게 해준다.
  - 앱을 리액트 훅으로 만든다면, class component, did mount, render... 이런 것들을 안해도 된다는 뜻이다.
  - 모든 것은 하나의 function이 되는거다.
  - 즉, 함수형 프로그래밍(functional programming) 스타일이 된다.

## class vs function
### Class
```javascript
class App extends Component {
  state = {
    count: 0
  };
  modify = n => {
    this.setState({
      count: n
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <div>{ count }</div>
        <button onClick={() => this.modify(count + 1)}>Increment</button>
      </div>
    );
  }
}
```
- 보다시피 많은 것들이 필요하다.
  - Class Component, state, 정의하고 패스하고 등등... this 하는 것도 귀찮고...

### function (with React Hooks)
```javascript
import React, { Component, useState } from "react";

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
    const { target: { value }} = e;
    setEmail(value);
  };
  return (
    <div>
      {potato}
      <button onClick={plusPotato}>Increment</button>
      <button onClick={() => kimchi(potato - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={ updateEmail }/>
    </div>
  )
}
```
- class component는 메뉴얼하게 하나하나 적어야했는데, 그럴 필요가 없는게 장점
  - Effect Hook이라는 것도 있는데, component did mount, did update와 유사하다. 이들은 주로 API에서 데이터를 요청할 때 사용한다.