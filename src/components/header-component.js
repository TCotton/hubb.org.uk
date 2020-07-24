class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="header-bottom">
      <div class="leftheader">
        <h1>Hubb support group</h1>
        <p class="tagtitle" role="doc-subtitle">'Helping us bounce back'</p>
        <img src="images/logo.png" alt="hub logo" class="hub-logo"/>
      </div>
      <div class="rightheader">
        <div class="gcse-search"></div>
      </div>
    </div>`;
  }
}
customElements.define("header-component", Header);
