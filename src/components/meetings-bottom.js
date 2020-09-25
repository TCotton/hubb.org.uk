class MeetingBottom extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<h3 class="meeting-bottom">Our meetings</h3><p>
      Meetings are held every 1st Thursday of the month from 4.30 - 6.30pm.
      Members socialise, listen to a talk or complete an activity,
      buffet and free raffles. Fees or charge 2.00 per session, to cover
      buffet costs and raffle prizes etc. Talks have been about
      activities, educational opportunities, benefits, housing and other
      topics.
    </p>`;
    }
  }
  customElements.define("meeting-bottom", MeetingBottom);