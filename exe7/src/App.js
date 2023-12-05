import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/create">create</NavLink>
            </li>
            <li>
              <NavLink to="/">read</NavLink>
            </li>
            <li>
              <NavLink to="/update">update</NavLink>
            </li>
          </ul>
        </nav>



        <Routes>
          <Route exact path='/create' element={< Create />}></Route>
          <Route exact path='/' element={< Read />}></Route>
          <Route exact path='/update' element={< Update />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;