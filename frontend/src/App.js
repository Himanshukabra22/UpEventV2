import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import Homepage from "./components/homepage";
// import Homepage2 from "./components/homepage2";
// import Dashboard from "./components/dashboard";
// import Buy from "./components/buy";
// import Sell from "./components/sell";
// import Login from "./components/login";
// import Register from "./components/register";
// import Analysis from "./components/analysis";
// import "./App.css";
// import "./Css/header.css";
// import "./Css/navbar.css";
// import "./Css/feature.css";
// import "./Css/cta.css";
// import "./Css/blog.css";
// import "./Css/article.css";
// import "./Css/register.css";
// import "./Css/footer.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/in" element={<Homepage2 />} /> */}
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route exact path="/buy" element={<Buy />} /> */}
          {/* <Route exact path="/sell" element={<Sell />} /> */}
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route exact path="/register" element={<Register />} /> */}
          {/* <Route exact path="/analysis" element={<Analysis />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
