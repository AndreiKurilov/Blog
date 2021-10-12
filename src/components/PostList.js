import { Component } from "../core/Component";
import { Post } from "./Post";

export class PostList extends Component {
  constructor(store) {
    super();
    this._posts = [];
    this._createPosts();
    this.store = store;
    this.store.subscribe(this._emitterHandler.bind(this));
  }

  _createContent() {
    return document.createElement("ul");
  }

  _createPosts() {
    this._children = this._posts.map((post) => {
      return new Post(post.id, post.text);
    });
  }

  _emitterHandler(state) {
    this._posts = state;
    this._createPosts();
    this._content.innerHTML = "";
    this.render();
  }
}
