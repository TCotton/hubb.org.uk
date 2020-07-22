class PrimaryNavigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav class="primary-nav">
    <span hidden id="menu-label">Main menu</span>
    <button
      class="menu-toggle"
      id="menu-toggle"
      aria-labelledby="menu-label"
      aria-expanded="false"
    >
      ☰
    </button>

    <ul class="menu plain-list" aria-labelledby="menu-label" id="menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="news.html">Latest news</a></li>
      <li><a href="members.html">Hubb members</a></li>
      <li><a href="contact.html">Contact us</a></li>
      <li><a href="policies.html">Hubb policies</a></li>
      <li><a href="volunteer.html">Volunteer</a></li>
      <li><a href="links.html">Useful links</a></li>
    </ul>
  </nav>
`;
  }

}
customElements.define("primary-navigation", PrimaryNavigation);
