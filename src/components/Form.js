import { Component } from "../core/Component";
import { v4 as uuidv4 } from "uuid";

export class Form extends Component {
  constructor(chidren, store) {
    super(chidren);
    this.store = store;
  }

  _createContent() {
    const form = document.createElement("form");
    form.onsubmit = (e) => {
      e.preventDefault();
      this.store.change({
        id: uuidv4(),
        text: e.target[0].value,
      });
      e.target[0].value = '';
    };
    return form;
  }
}
