class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="header-bottom">
      <div class="leftheader">
        <h1>Hubb support group</h1>
        <p class="tagtitle" role="doc-subtitle">'Helping us bounce back'</p>
      </div>
      <div class="rightheader">
        <script
          async
          src="https://cse.google.com/cse.js?cx=008076670028902366462:mxjrfvhpaoi"
        ></script>
        <div class="gcse-search"></div>
      </div>
    </div>`;
  }
}
customElements.define("header-component", Header);
