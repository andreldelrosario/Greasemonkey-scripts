// ==UserScript==
// @name     Left/Right Chapter Navigation for Mangakakalots
// @namespace https://manganelo.com/
// @version  0.0.1
// @grant    none
// @include https://*manganelo.com/chapter/*
// ==/UserScript==

const prevAnchor = [...document.getElementsByClassName("navi-change-chapter-btn-prev a-h")];
const nextAnchor = [...document.getElementsByClassName("navi-change-chapter-btn-next a-h")];

let prev = prevAnchor.find(a => a.innerHTML.includes("PREV")).href;
let next = nextAnchor.find(a => a.innerHTML.includes("NEXT")).href;

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