export class Component {
  constructor(children) {
    this._parentComponent = null;
    this._content = this._createContent();
    this._children = children;
  }
  
  // sets parent for component
  
  setParentComponent(component) {
    this._parentComponent = component;
    return this;
  }

  _createContent() {}

  render() {
    if (this._parentComponent && this._content) {
      this._parentComponent.append(this._content);
      
      if (this._children) {
        this._children.forEach((child) => {
          child.setParentComponent(this._content).render();
        });
      }
    } 
  }
}









// console.log('1 render_parentComponent', this._parentComponent);
// console.log('1 render_content', this._content);
// console.log('1 render_children', this._children);
// console.log('!!!!!!!!')
