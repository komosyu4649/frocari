export default class CheckCurrentLink {
  constructor() {
    this.targets = null
  }

  init() {
    this.setSelector()
    for (let i = 0; i < this.targets.length; i++) {
      this.checkCUrrentLink(i)
    }
  }

  setSelector() {
    this.targets = document.querySelectorAll('.js-check__current-link')
  }

  checkCUrrentLink(i) {
    if (window.location.pathname === this.targets[i].getAttribute('href')) {
      this.targets[i].classList.add('is-current')
    }
  }
}
