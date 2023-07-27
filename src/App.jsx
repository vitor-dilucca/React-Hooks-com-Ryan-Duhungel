import React, { Component, useState, useEffect } from "react";
import "./App.css";

//functional component
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Olá asa</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default App;

//mesma coisa com class component

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   contar = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
//   componentDidUpdate(){
//     document.title = `Clicked ${this.state.count} times`
//   }
//   render() {
//     return (
//       <>
//         <h2>Olá asa</h2>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.contar}>Increment</button>
//       </>
//     );
//   }
// }
// export default App;
