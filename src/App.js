import logo from "./logo.svg";
import "./App.css";
import Curve from "./components/Curve";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollTop from "./components/ScrollTop";
// require("bootstrap");
require("@popperjs/core");

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      {/* <ScrollTop /> */}
    </BrowserRouter>
  );
}

export default App;
