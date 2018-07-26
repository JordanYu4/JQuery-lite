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

  


    //Class end
  }

module.exports = DOMNodeCollection;
