import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../components/item.js";
import "../assets/styles.css";
import photo from '../source/icon.png';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function slide() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Paroisse Catholique Emanuel de Montreuil</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
          <Item> <img src={photo} alt="hi"/></Item>
        </Carousel>
      </div>
    </div>
  );
}

export default slide;