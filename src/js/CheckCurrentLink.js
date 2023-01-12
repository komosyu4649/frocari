export default class CheckCurrentLink {
  constructor() {}

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
      console.log(this.targets[i])
      this.targets[i].classList.add('is-current')
    }
  }
}
