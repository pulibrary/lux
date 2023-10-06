class MyElement extends HTMLElement {
  static observedAttributes = ["variation"]

  constructor() {
    // Always call super first in constructor
    super()
  }

  connectedCallback() {
    console.log("Custom element added to page.")
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.")
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.")
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "variation") {
      switch (newValue) {
        case "default":
          this.style = ""
          break
        case "disabled":
          this.style = "text-decoration: line-through; color: grey;"
          break
        case "emphasis":
          this.style = "font-style: italic;"
          break
        case "strong":
          this.style = "font-weight:700;"
          break
      }
    }
  }
}

customElements.define("my-element", MyElement)
