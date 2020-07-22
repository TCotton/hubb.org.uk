class SecondaryNavigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer>
    <nav class="secondary-nav" aria-label="Secondary">
      <ul>
        <li><a href="news.html">Latest news</a></li>
        <li><a href="members.html">Hubb members</a></li>
        <li><a href="contact.html">Contact us</a></li>
        <li><a href="policies.html">Hubb policies</a></li>
        <li><a href="links.html">Useful links</a></li>
        <li><a href="sitemap.html">Sitemap</a></li>
      </ul>
    </nav>
    <p class="copyright">
      &copy; HUBB all Rights Reserved. Thanks go to late Christine Maloney
      for all her previous hard work on this site
    </p>
  </footer>
`;
  }
}
customElements.define("secondary-navigation", SecondaryNavigation);
