// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import Car from './componants/Car';
// import Avatar from './componants/Avatar';
// // const style = { margin: "0 20%" }
// function App() {
//   return (
//     <div class='container' >
//       <Car />
//       {/* <Avatar /> */}


//     </div>
//   );
// }
// export default App;

import React, { useState } from 'react';
import Card from "./card"

function App() {
  const [state, setState] = useState("hello from parent state");

  const handleChange = () => {
    setState("the state in parent changed");
  }

  return (
    <div className="container">
      <Card att="hello from props" />
      <p>{state}</p>
      <button onClick={handleChange}>Change</button>
    </div>
  );
}

export default App;