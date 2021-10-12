import { Component } from "../core/Component";

export class Submit extends Component {
  constructor() {
    super();
  }
  
  _createContent() {
    const submit = document.createElement('input');
    submit.type = 'submit';
    return submit;
  }
}

