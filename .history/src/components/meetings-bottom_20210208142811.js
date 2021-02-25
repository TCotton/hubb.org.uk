class MeetingBottom extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<h3 class="meeting-bottom">Our meetings</h3><p>
      Next meeting: Venue to be confirmed.
    </p>`;
    }
  }
  customElements.define("meeting-bottom", MeetingBottom);