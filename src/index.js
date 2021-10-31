import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


  function Article() {
    return (
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    );
  }
  function Comment() {
    return <div>Naturally, I agree with this article.</div>;
  } 

  function App() {
    return (
      <div>
        <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
        <div>Naturally, I agree with this article.</div>
      </div>
    );
  }

//   function article() {
//     return (
//       <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
//     );
//   }

//   function App() {
//     return (
//       <div>
//         <article />
//       </div>
//     );
//   }

//   function App() {
//     return (
//       <div>
//         <Article />
//       </div>
//     );
//   }