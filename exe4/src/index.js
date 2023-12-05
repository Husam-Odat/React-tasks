// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import App from './App';
// import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// =========route=====================
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter as Bro, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Siginup from "./pages/Siginup";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <Bro>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="Siginup" element={<Siginup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Bro>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);