import React from "react";
import { Carousel } from 'antd';
import html from "./images/html.png";
import nodejs from "./images/nodejs.png";
import javascript from "./images/javascript.png";
import css from "./images/css.png";
import git from "./images/git.png";
import sql from "./images/sql.png";
import mysql from "./images/mysql.png";
import react from "./images/react.png";
import api from "./images/api.png";
import mvc from "./images/mvc.png";
import scrum from "./images/scrum.png";

const contentStyle = {
    marginTop: "50px",
    height: '180px',
    color: '#fff',
    textAlign: 'center',
    background: '#333',
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
   
};

const contentSkill = {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",

};


const Technologies = () => (
    <Carousel autoplay>
      <div>
        <p style={contentStyle}>
        <span>
        <figure style={contentSkill}>
        <img src={nodejs } height= '70px' />  
        <figcaption >Node.js</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={javascript } height= '70px' />  
        <figcaption >JavaScript</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={html } height= '70px' />  
        <figcaption >HTML</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={css } height= '70px' />  
        <figcaption >CSS</figcaption>  
        </figure>
        </span>
        </p>
    </div>
    <div>
      <p style={contentStyle}>
        <span>
        <figure style={contentSkill}>
        <img src={react } height= '70px' />  
        <figcaption >React</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={git } height= '70px' />  
        <figcaption >Git</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={sql } height= '70px' />  
        <figcaption >SQL</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={mysql } height= '70px' />  
        <figcaption >MySQL</figcaption>  
        </figure>
        </span>
        </p>
      </div>
      <div>
      <p style={contentStyle}>
        <span>
        <figure style={contentSkill}>
        <img src={api } height= '70px' />  
        <figcaption >APIs</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={mvc } height= '70px' />  
        <figcaption >MVC</figcaption>  
        </figure>
        </span>
        <span>
        <figure style={contentSkill}>
        <img src={scrum } height= '70px' />  
        <figcaption >SCRUM</figcaption>  
        </figure>
        </span>
        </p>
      </div>
    </Carousel>
  );


export default Technologies



