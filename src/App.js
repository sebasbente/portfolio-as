import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";


function App() {
  const classes = useStyles();
  return (
    <div className={"classes.root"}>
      <NavBar/>
      <About title= "About Me" id="about" dark={true } />
      <Skills title= "My Coding Journey" id= "skills" dark={false } />
      <MyWork title= "My Work" id="work" dark={true } />
      <Contact title= "Get in touch" id="contact" dark={false } />
    </div>
  );
}

const useStyles = makeStyles((theme)=> ({
  root: {

  } 
}))

export default App;
