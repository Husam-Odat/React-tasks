import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

function App() {
    return (
        <div className="wrapper">
            <h1>Marine Mammals</h1>
            <nav>
                <ul>
                    <li><a href="/manatee">Manatee</a></li>
                    <li><a href="/narwhal">Narwhal</a></li>
                    <li><a href="/whale">Whale</a></li>
                </ul>
            </nav>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/manatee">Manatee</Link></li>
                        <li><Link to="/narwhal">Narwhal</Link></li>
                        <li><Link to="/whale">Whale</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/manatee" >
                        <Manatee />
                    </Route>
                    <Route path="/narwhal">
                        <Narwhal />
                    </Route>
                    <Route path="/whale">
                        <Whale />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;