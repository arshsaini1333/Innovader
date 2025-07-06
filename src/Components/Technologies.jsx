import React from "react";
import "../public/Technologies.css";
import angular from '../assets/angular.png'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import node from '../assets/node.png'
import php from '../assets/php.png'
import react from '../assets/react.png'
import shopify from '../assets/shopify.png'
import tailwind from '../assets/tailwind.png'
import wordpress from '../assets/wordpress.png'
const cards = [
    { title: "React", image: react },
    { title: "JavaScript", image: js },
    { title: "HTML", image: html },
    { title: "CSS", image: css },
    { title: "Bootstrap", image: bootstrap },
    { title: "Tailwind CSS", image: tailwind },
  { title: "Angular", image: angular },
  { title: "NodeJS", image: node },
  { title: "ExpressJS", image: express },
  { title: "PHP", image: php },
  { title: "Shopify", image: shopify },
  { title: "Wordpress", image: wordpress },
 
];

export default function AutoScrollCards() {
  const duplicatedCards = [...cards, ...cards]; // repeat cards for infinite scroll effect

  return (
    <div className="scroll-container">
        <h1>Technologies <span>we use</span></h1>
      <div className="scroll-track">
        {duplicatedCards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
