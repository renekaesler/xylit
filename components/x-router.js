const routers = new Set();

const isXLink = el => el.dataset.hasOwnProperty('xLink') || el.hasAttribute('x-link');

window.addEventListener('click', e => {
  if (!isXLink(e.target)) return;

  e.preventDefault();
  e.stopPropagation();

  window.history.pushState(null, null, e.target.href)

  routers.forEach(router => router.onHistoryChanged(new URL(e.target.href)))
})


class XRouter extends HTMLElement {
  // Fires when an instance of the element is created or updated
  constructor() {
      super();
  }

  // Fires when an instance was inserted into the document
  connectedCallback() {
    routers.add(this);

    this.routes = this.getElementsByTagName('x-route');
  }

  // Fires when an instance was removed from the document
  disconnectedCallback() {
    routers.delete(this);
  }

  // Fires when an attribute was added, removed, or updated
  attributeChangedCallback(attrName, oldVal, newVal) {
  }

  // Fires when an element is moved to a new document
  adoptedCallback() {
  }

  onHistoryChanged(url) {
    for(const route of this.routes) {
      if (route.path.includes(url.pathname)) {
        route.active();
      } else {
        route.inactive();
      }
    }
  }
}

window.customElements.define('x-router', XRouter);