  // ==UserScript==
  // @name     Left/Right Chapter Navigation for Mangakakalots
  // @namespace https://mangakakalot.com/
  // @version  0.0.3
  // @grant    none
  // @include https://*.mangakakalots.com/chapter/*
  // @include https://*.mangakakalot.com/chapter/*
  // @include https://mangakakalot.com/chapter/*
  // ==/UserScript==

  const prevAnchor = [...document.getElementsByClassName("next")];
  const nextAnchor = [...document.getElementsByClassName("back")];

  let prev = null;
  let next = null;

  if (prevAnchor.length != 0) {
    prev = prev || prevAnchor.find(a => a.innerHTML.includes("PREV")).href;
    next = next || prevAnchor.find(a => a.innerHTML.includes("NEXT")).href;
  }

  if (nextAnchor.length != 0){
    prev = prev || nextAnchor.find(a => a.innerHTML.includes("PREV")).href;
    next = next || nextAnchor.find(a => a.innerHTML.includes("NEXT")).href;
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