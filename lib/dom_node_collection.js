class DOMNodeCollection {

  constructor(htmlArr) {
    this.htmlArr = htmlArr;
  }

  html(str) {
    if (str) {
      this.htmlArr.forEach((node) => {
        node.innerHTML = str;
      });
    } else {
      return this.htmlArr[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(element) {
    if (typeof element !== DOMNodeCollection) {
      element = [element];
    }
    this.htmlArr.forEach((node) => {
      element.forEach((el) => {
        node.innerHTML += el.outerHTML;
      });
    });
  }

  attr(attribute, setVal) {
    if (setVal) {
      this.htmlArr.forEach((el) => {
        el.setAttribute(attribute, setVal);
      });
    } else {
      for (let i = 0; i < this.htmlArr.length; i++) {
        if (htmlArr[i].hasAttribute(attribute)) {
          return htmlArr[i].getAttribute(attribute);
        }
      }
    }
  }

  addClass(className) {
    this.htmlArr.forEach((el) => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.htmlArr.forEach((el) => {
      el.classList.remove(className);
    });
  }

  children() {
    let childPile = [];
    this.htmlArr.forEach((node) => {
      node.children.forEach((child) => {
        childPile.push(child);
      });
    });
    return new DOMNodeCollection(childPile);
  }

  parent() {
    let parentPile = [];
    this.htmlArr.forEach((child) => {
      parentPile.push(child.parentNode);
    });
    return new DOMNodeCollection(parentPile);
  }

  find(selector) {
    let childPile = this.children();
    let elements = [];
    childPile.forEach((child) => {
      child.querySelectorAll(selector).forEach((el) => {
        elements.push(el);
      });
    });
    return elements;
  }

  remove() {
    this.empty();
    this.htmlArr = [];
  }

  on(type, callback) {
    this.htmlArr.forEach((el) => {
      el.attr("eventCallback", callback);
      el.addEventListener(type, callback);
    });
  }

  off(type) {
    this.htmlArr.forEach((el) => {
      el.removeEventListener(type, el.attr("eventCallback"));
    });
  }



} //Class end

module.exports = DOMNodeCollection;
