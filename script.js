"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("add").addEventListener("click", addIcon);
    id("replace-first").addEventListener("click", replaceFirstIcon)
    id("remove-last").addEventListener("click", removeLastIcon);
    id("remove-all").addEventListener("click", removeAllIcons);
    id("prevent").addEventListener("click", preventRemoval);
  }

  function addIcon() {
    let candy = gen("img");
    candy.src = "candy.png";
    candy.alt = "candy";
    id("icons").appendChild(candy);
  }

  function replaceFirstIcon() {
    if (id("icons").firstElementChild !== null) {
      let newCandy = gen("img");
      newCandy.src = "candy2.png";
      newCandy.alt = "new candy";
      id("icons").replaceChild(newCandy, id("icons").firstElementChild);
    }
  }

  function removeLastIcon() {
    if (id("icons").lastElementChild !== null) {
      id("icons").lastElementChild.remove();
    }
  }

  function removeAllIcons() {
    // let candies = document.querySelectorAll("img");
    // for (let i = 0; i < candies.length; i++) {
    //   candies[i].remove();
    // }
    id("icons").innerHTML = "";
  }

  function preventRemoval() {
    id("remove-last").removeEventListener("click", removeLastIcon);
    id("remove-all").removeEventListener("click", removeAllIcons);
  }

  function id(id) {
    return document.getElementById(id);
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }
})();