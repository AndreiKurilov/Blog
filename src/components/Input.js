import { Component } from "../core/Component";

export class Input extends Component {
  constructor() {
    super();
  }
  
  _createContent() {
    const textarea = document.createElement('textarea');
    textarea.rows = 5;
    textarea.style.resize = 'none';
    return textarea;
  }
}
