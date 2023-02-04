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
                            cursorColor="tomato"
                            typeSpeed={100}
                        />
                        <Typography variant="h6" color="#fff">
                         
                        </Typography>
                        <TypeWriterEffect 
                            text="And am a Full Stack Developer"
                            textStyle={{fontSize: "1.2rem", fontWeight: "500px", color: "black"}}
                            startDelay={3500}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                        <TypeWriterEffect 
                            text="I am also an educator. I am passionate about being part of projects that challenge me to continue learning and building with others.
                            I believe that I can channel and deploy in the world of programming many of the skills acquired in my teaching practice.
                            I am looking for a space that allows me to put my skills into practice and continue to develop myself both professionally and at work."
                            textStyle={{fontSize: "1.2rem", fontWeight: "300px", color: "#333"}}
                            startDelay={7000}
                            cursorColor="#333"
                            typeSpeed={60}
                        />
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
        minHeight: "160vh",
        [theme.breakpoints.down("md")]: {
            minHeight: "120vh",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "80vh",
        },
        
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
        height: "60vw",
        display: "flex",
        marginTop: theme.spacing(2),
        position: "relative",
    },
    media: {
        height: "auto",
        minWidth: "250px",
        [theme.breakpoints.down("sm")]: {
            minWidth: "100px",
        },
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
    },
    cardcontent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop: theme.spacing(3),
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    },
    pdfbutton: {
        position: "absolute",
        bottom: "5rem",
        right: "4rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2.6rem",
            rigth: "1rem",
        },
        backgroundColor: "tomato",
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: "#333",
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