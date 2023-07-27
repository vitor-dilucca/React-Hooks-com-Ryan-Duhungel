import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

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

// class App extends Component {
  //   state = {
//     count: 0,
//   };

//   contar = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h2>Olá asa</h2> <p>Count: {this.state.count}</p>
//         <button onClick={this.contar}>Increment</button>
//       </>
//     );
//   }
// }
// export default App;

