class MeetingTop extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<address>
      Venue to be confirmed
    </address>`;
    }
  }
  customElements.define("meeting-top", MeetingTop);