import { ApplicationComponent } from "./components/ApplicationComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { Form } from "./components/Form";
import { Input } from './components/Input';
import { Submit } from './components/Submit';
import { PostList } from "./components/PostList";
import { Store } from "./store/store"

const store = new Store();

const application = new ApplicationComponent([
  new HeaderComponent(),
  new Form([new Input(), new Submit()], store),
  new PostList(store)
]);


application.setParentComponent(document.getElementById('app')).render();
