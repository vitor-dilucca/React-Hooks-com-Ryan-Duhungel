import React, { Component, useState, useEffect } from "react";
import "./App.css";

const App = () => {
  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react}"
  );
  const [loading, setLoading] = useState(false);
  //fetch news
  const fetchNews = () => {
    //set loading to true
    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((data) => (setNews(data.hits), setLoading(false)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  const showLoading = () => (loading ? <h2>Loading....</h2> : "");

  const searchForm = () => (
    <form onSubmit={handleSubmit} action="">
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
  );

  const showNews = () => {
    return news.map((n, i) => <p key={i}>{n.title}</p>);
  };

  return (
    <>
      <h2>News</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
    </>
  );
};
export default App;

//functional component, counter
// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   });

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h2>Olá asa</h2>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// };

// export default App;

//mesma coisa com class component, counter

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
