import { AppBar, Drawer, IconButton, List, makeStyles, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import logo from "./images/full-stack.png"
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

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
    const [open, setOpen] = useState(false);
    return (
    <>
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
                <IconButton edge="end" className={classes.menubutton }>
                    <MenuIcon fontSize="large"/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
            <IconButton>
                <CancelIcon/>
            </IconButton>
        </Drawer>
    </>

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
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "tomato",
            position: "absolute",
            top: 0,
            right: 10,
        }
    }
  }))

export default NavBar