class XRoute extends HTMLElement {

  // Fires when an instance of the element is created or updated
  constructor() {
    super();

    this.inactive();
  }

  // Fires when an instance was inserted into the document
  connectedCallback() {
  }

  // Fires when an instance was removed from the document
  disconnectedCallback() {
  }

  // Fires when an attribute was added, removed, or updated
  attributeChangedCallback(attrName, oldVal, newVal) {
  }

  // Fires when an element is moved to a new document
  adoptedCallback() {
  }

  get path() {
    return this.getAttribute('path');
  }

  active() {
    this.style.display = null;
  }

  inactive() {
    this.style.display = 'none';
  }
}

window.customElements.define('x-route', XRoute);