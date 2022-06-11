/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRand = who[Math.floor(Math.random() * who.length)];
  let actionRand = action[Math.floor(Math.random() * action.length)];
  let whatRand = what[Math.floor(Math.random() * action.length)];
  let whenRand = when[Math.floor(Math.random() * when.length)];

  document.querySelector("p").innerHTML =
    whoRand +
    " " +
    actionRand +
    " " +
    whatRand +
    " " +
    whenRand +
    console.log("Nose");
};
