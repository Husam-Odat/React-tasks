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

// import React from 'react'
// import Posts from './Pages/Posts/Posts'
// import Post from './Pages/Post/Post'
// import C from './comp/c/c'
// import R from './comp/r/r'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import U from './comp/u/u'
// import { Link } from 'react-router-dom';
// const App = () => {
//   return (
//     <>
    {/* <Posts/>
    <Post />

    <div>
      <h3>react crud</h3>
    </div>
      <div>
        <C />
      </div>
      <div>
        <R />
      </div> */}
    

      {/* <Router>
      
        <div className="main">
          <div>
            <h3>React Crud Operations</h3>
          </div>

          <div>
            <Routes exact path='/' comp={C} />
            
          </div>

          <div style={{ marginTop: 20 }}>
            <Routes exact path='/r' comp={R} />
            
          </div>

          <Routes path='/u' comp={U} />
          

        </div>
      
      </Router>
    </>
  )
}

export default App */}


import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

// import Posts from './Pages/Posts/Posts'
// import Post from './Pages/Post/Post'
// import C from './comp/c/c'
// import R from './comp/r/r'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import U from './comp/u/u'
// import { Link } from 'react-router-dom';

import './App.css';
import C from './comp/c/c';
import R from './comp/r/r';
import U from './comp/u/u';

function App() {
  return (
    // <Router>
    //   <div className="main">
    //     <h2 className="main-header">React Crud Operations</h2>
    //     <Routes>

    //       <Route exact path='/create' component={Create} />
    //       <Route exact path='/read' component={Read} />
    //       <Route path='/update' component={Update} />

    //     </Routes>
    //   </div>
    // </Router>
    <Router>
      <div >
        <h2 >React Crud Operations</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/c">create</NavLink>
            </li>
            <li>
              <NavLink to="/">read</NavLink>
            </li>
            <li>
              <NavLink to="/u">update</NavLink>
            </li>
          </ul>
        </nav>



        <Routes>
          <Route exact path='/c' element={< C />}/>
          <Route exact path='/' element={< R />}/>
          <Route exact path='/u' element={< U />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;