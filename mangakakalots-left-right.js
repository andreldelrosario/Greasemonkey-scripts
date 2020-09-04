// ==UserScript==
// @name     Left/Right Chapter Navigation for Mangakakalots
// @namespace https://ww1.mangakakalots.com/
// @version  0.0.2
// @grant    none
// @include https://*.mangakakalots.com/chapter/*
// ==/UserScript==

const prevAnchor = [...document.getElementsByClassName("next")];
const nextAnchor = [...document.getElementsByClassName("back")];

let prev = prevAnchor.find(a => a.innerHTML.includes("PREV")).href;
let next = null;

if(nextAnchor.length == 0){
  next = prevAnchor.find(a => a.innerHTML.includes("NEXT")).href;
} 
else {
  next = nextAnchor.find(a => a.innerHTML.includes("NEXT")).href;
}

function keyCheck(e){
  // alert(e.keyCode);
  
  if (e.keyCode === 37) {
    // alert(prev);
    window.location.href = prev;
  }
  else if (e.keyCode === 39) {
    // alert(next)
    window.location.href = next;
  }
}

window.addEventListener("keydown", keyCheck, true);