// ==UserScript==
// @name     Left/Right Chapter Navigation for Mangakakalots
// @namespace https://ww1.mangakakalots.com/
// @version  0.0.1
// @grant    none
// @include https://*.mangakakalots.com/chapter/*
// ==/UserScript==

const anchor = [...document.getElementsByClassName("next")];
let prev = anchor.find(a => a.innerHTML.includes("PREV")).href;
let next = anchor.find(a => a.innerHTML.includes("NEXT")).href;

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