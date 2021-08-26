import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../components/item.js";
import "../assets/component/styles.css";
import photo1 from '../source/1.png';
import photo2 from '../source/2.png';
import photo3 from '../source/3.png';
import photo4 from '../source/4.png';
import photo5 from '../source/5.png';
import photo6 from '../source/6.png';
import photo7 from '../source/7.png';
import photo8 from '../source/8.png';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function slide() {
  return (
    <div className="header_slide">
      <h1 className="home_header">Paroisse Emmanuel</h1>
      <div className="App_slide">
        <Carousel breakPoints={breakPoints}>
          <Item> <img className="sld_t" src={photo1} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo2} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo3} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo4} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo5} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo6} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo7} alt="hi"/></Item>
          <Item> <img className="sld_t" src={photo8} alt="hi"/></Item>
        </Carousel>
      </div>
    </div>
  );
}

export default slide;