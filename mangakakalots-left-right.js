// ==UserScript==
// @name     Left/Right Chapter Navigation for Mangakakalots
// @namespace https://ww1.mangakakalots.com/
// @version  0.0.5
// @grant    none
// @include https://*.mangakakalots.*/chapter/*
// @include https://*.mangakakalot.*/chapter/*
// @include https://mangakakalot.com/chapter/*
// @include https://*chapmanganato.com/*

// ==/UserScript==

const nextAnchor = [...document.getElementsByClassName("next")];
const prevAnchor = [...document.getElementsByClassName("back")];

let prev = null;
let next = null;

if (prevAnchor.length > 0) {
  prev = prev || prevAnchor.find(a => a.innerHTML.includes("PREV"));
  next = next || prevAnchor.find(a => a.innerHTML.includes("NEXT"));
}

if (nextAnchor.length > 0){
  prev = prev || nextAnchor.find(a => a.innerHTML.includes("PREV"));
  next = next || nextAnchor.find(a => a.innerHTML.includes("NEXT"));
}

function keyCheck(e){
  // alert(e.keyCode);

  if (e.keyCode === 37 && prev) {
    // alert(prev);
    window.location = prev;
  }
  else if (e.keyCode === 39 && next) {
    // alert(next)
    window.location = next;
  }
}

window.addEventListener("keydown", keyCheck, true);