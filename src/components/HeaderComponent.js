import { Component } from "../core/Component";

export class HeaderComponent extends Component {
  constructor() {
    super();
  }

  _createContent() {
    const header = document.createElement('header');
    header.textContent = "BLOG";
    return header;
  }
}
