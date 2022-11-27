import { AppBar, List, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import logo from "./images/full-stack.png"
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/InfoTwoTone";


const links = [
    {
        id: "about",
        text: "About Me",
        icon: <InfoTwoToneIcon/>
    },
    {
        id: "skills",
        text: "Skills",
        icon: <EmojiObjectsTwoToneIcon/>
    },
    {
        id: "work",
        text: "My Work",
        icon: <BuildTwoToneIcon/>
    },
    {
        id: "contact",
        text: "Get in touch",
        icon: <ContactMailTwoToneIcon/>
    },
]

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className="toolbar">
                <img src={logo } className={classes.logp} alt="Logo" height={"60px"}/>
                <List className={classes.menu}>
                    {
                        links.map(({ id, text }, index)=>(
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>
                            {text }
                            </Link>
                        ))
                    }
                </List>
            </Toolbar>
        </AppBar>

    )
}

const useStyles = makeStyles((theme)=> ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 999,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logo: {
        height: "1.5rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }  
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato",
        }
    }, 
  }))

export default NavBar