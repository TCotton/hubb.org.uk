class MeetingTop extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<address>
      Meeting address: Hub cafe, 11 Gubbins Lane, Harold Wood, Romford RM3 0QA
      <br />
      Time: 4.30pm - 6.30pm
    </address>`;
    }
  }
  customElements.define("meeting-top", MeetingTop);