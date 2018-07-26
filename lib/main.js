const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arglebargle) {
  if (arglebargle instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arglebargle));
  } else {
    let elementArr = Array.from(document.querySelectorAll(arglebargle));
    return new DOMNodeCollection(elementArr);
  }
};
