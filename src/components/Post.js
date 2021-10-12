import { Component } from "../core/Component";

export class Post extends Component {
  constructor(id, text) {
    super();
    this._id = id;
    this._text = text;
    this._content = this._createContent();
    // this._button = button;
  }

  _createContent() {
    if (this._text) {
      const liPost = document.createElement('li');
      liPost.innerText = `${this._text}`;
      const button = document.createElement('button');
      button.innerText = 'x';
      liPost.appendChild(button);

      button.onclick = (e) => {
        const result = confirm('Are you sure?');
        if (!result) {
          e.preventDefault();
        } else {
        liPost.remove()
        }
      }
      return liPost;
    }
  }
  
}
