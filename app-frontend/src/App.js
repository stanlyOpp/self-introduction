import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Home from "./page/Home.js";
import About from "./page/About.js"
import Skill from "./page/Skill.js";
import Contact from "./page/Contact.js";
import Education from "./page/Education.js";
//import SlideShow from './functuinscrip/Slideshow.js';
//import Test from './functuinscrip/test.js'
//import TestSlide from './component/testSlide.js'
function App() {
  return (
      <Router>
        <div className="contant">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Education" element={<Education></Education>}></Route>
            <Route path="/Knowledge" element={<Skill></Skill>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
        <h1>here</h1>
      </Router>
  );
}

export default App;
