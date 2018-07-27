const DOMNodeCollection = require("./dom_node_collection");

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

$l.prototype.extend = function(...objects) {
  let merged = {};
  objects.forEach((object) => {
    Object.keys(object).forEach((key) => {
    merged[key] = object[key];});
  });
};

$l.prototype.ajax = function() {

};
