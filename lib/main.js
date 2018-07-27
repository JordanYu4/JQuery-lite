const DOMNodeCollection = require("./dom_node_collection.js");

const callbackQueue = [];
let loaded = false;

document.addEventListener("DOMContentLoaded", function() {
  loaded = true;
  callbackQueue.forEach((callback) => {
      callback();
  });
});

window.$l = function(arglebargle) {
  if (arglebargle instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arglebargle));
  } else if (arglebargle instanceof Function) {
    if (loaded) {
      arglebargle();
    } else {
    callbackQueue.push(arglebargle);
    }
  } else {
    let elementArr = Array.from(document.querySelectorAll(arglebargle));
    return new DOMNodeCollection(elementArr);
  }
};
