class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="full-width-bar">
    <div class="header-bottom">
      <div class="leftheader">
        <h1>Hubb support group</h1>
        <p class="tagtitle" role="doc-subtitle">'Helping Us Bounce Back'</p>
        <img src="images/hubb-logo.png" alt="hub logo" class="hub-logo"/>
      </div>
      <div class="rightheader">
        <div class="gcse-search"></div>
      </div>
    </div>
    </div>`;
  }
}
customElements.define("header-component", Header);
