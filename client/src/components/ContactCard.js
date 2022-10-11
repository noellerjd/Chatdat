import React from "react";
import Github from "./images/githublogo.png";
import LinkedIn from "./images/linkedinlogo.png";

export default function contactCard(props) {
  return (
    <div className="contact-card">
      <div className="contact-inner">
        <img className="contact-img" src={props.img} alt={props.name}></img>
        <h1>{props.name}</h1>
      </div>
      <div className="contact-links">
        <h3>
          <a
            href={props.github}
            alt={props.gitLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github Logo" />
          </a>
        </h3>
        <h3>
          <a
            href={props.linkedin}
            alt={props.name}
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </h3>
      </div>
    </div>
  );
}
