export class Emitter {
  constructor() {
    this.listners = {}
  }

  emit(eventName, payload) {
    if (this.listners[eventName]) {
      this.listners[eventName].forEach(handler => {
        handler(payload);
      });
    }
  }
  
  subscribe(eventName, handler) {
    if (!this.listners[eventName]) {
      this.listners[eventName] = [];
      this.listners[eventName].push(handler);
    } else {
      this.listners[eventName].push(handler);
    }
  }
}
