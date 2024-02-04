// ==UserScript==
// @name     Left/Right Chapter Navigation for Manganelo
// @namespace https://manganelo.com/
// @version  0.0.3
// @grant    none
// @include https://*manganelo.com/chapter/*
// @include https://*readmanganato.com/manga*
// @include https://*chapmanganato.com/*
// @include https://*chapmanganato.to/*

// ==/UserScript==

const prevAnchor = [...document.getElementsByClassName("navi-change-chapter-btn-prev a-h")];
const nextAnchor = [...document.getElementsByClassName("navi-change-chapter-btn-next a-h")];

let prev = null;
let next = null;

if (prevAnchor.length > 0) {
	prev = prevAnchor.find(a => a.innerHTML.includes("PREV")).href;
}
if (nextAnchor.length > 0) {
	next = nextAnchor.find(a => a.innerHTML.includes("NEXT")).href;
}


function keyCheck(e){
  // alert(e.keyCode);

  if (e.keyCode === 37 && prev) {
    // alert(prev);
    window.location.href = prev;
  }
  else if (e.keyCode === 39 && next) {
    // alert(next)
    window.location.href = next;
  }
}

window.addEventListener("keydown", keyCheck, true);