import React from "react";
import { createTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import { purple } from "@material-ui/core/colors";


const theme = createTheme ({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: "#333" },
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={"classes.root"}>
      <NavBar/>
      <About title= "About Me" id="about" dark={true } />
      <Skills title= "My Coding Journey" id= "skills" dark={false } />
      <MyWork title= "My Work" id="work" dark={true } />
      <Contact title= "Get in touch" id="contact" dark={false } />
    </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme)=> ({
  root: {

  } 
}))

export default App;
