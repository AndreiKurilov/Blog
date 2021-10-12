import { Emitter } from "./emitter";

export class Store {
  constructor() {
    this.emitter = new Emitter();
    this.state = [];
  }

  subscribe(handler) {
    this.emitter.subscribe("change", handler);
  }

  change(payload) {
    this.state = [...this.state, payload];
    this.emitter.emit("change", this.state);
  }

  delete() {
    // id = e.target[0].value
  }
}







// notify() {
//   this.emitter.emit("change", this.state);
// }

// change(payload) {
//   this.state = [...this.state, payload];
//   this.notify();
// }
