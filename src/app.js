/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  pagesNames();
};
let pronoun = ["the", "our"];
let adj = ["great", "big", "super"];
let noun = ["jogger", "racoon"];
let point = [".com", ".net", ".ve", ".es"];

let pagesNames = () => {
  for (let pronouns of pronoun) {
    for (let adjs of adj) {
      for (let nouns of noun) {
        for (let points of point) {
          console.log(pronouns + adjs + nouns + points);
        }
      }
    }
  }
};
