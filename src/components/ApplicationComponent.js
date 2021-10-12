import { Component } from "../core/Component";

export class ApplicationComponent extends Component {
  constructor(children) {
    super(children);
  }

  _createContent() {
    return document.createElement('div');
  }
}
