import {Router} from '@reach/router';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import Main from './views/Main';

function App() {
  return (
    <div>
        <h1>Favorite authors</h1>
        <Router>
          <Main path="/"/>
          <NewAuthor path="/new"/>
          <UpdateAuthor path="/edit/:id"/>
        </Router>
    </div>
  );
}
export default App;
