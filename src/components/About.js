import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import fotoperfil from "./images/foto-perfil.jpg";
import pdf from "./images/CV-Sebastian Bente.pdf";
import TypeWriterEffect from "react-typewriter-effect";


const About = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card }>
                    <CardMedia image={fotoperfil } className={classes.media } title="picture"/>
                    <CardContent className={classes.cardcontent }>
                        <TypeWriterEffect 
                            text="Hi, I am Sebastián Bente"
                            textStyle={{fontSize: "2rem", fontWeight: "700px", color: "tomato"}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <TypeWriterEffect 
                            text="And am an awesome Full Stack Developer"
                            textStyle={{fontSize: "1.2rem", fontWeight: "500px", color: "black"}}
                            startDelay={2500}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                            escribir descripcion
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href={pdf } download>
                            Download CV
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}

const useStyles = makeStyles((theme)=> ({
    section: {
        minHeight: "100vh",  
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "70vw",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    media: {
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
    },
    pdfbutton: {
        position: "absolute",
        bottom: "5rem",
        rigth: "4rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            rigth: "1rem",
        },
        backgroundColor: "tomato",
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: "#fff",
        },
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover": {
            color: "tomato",
        } 
    },
  }))

export default About