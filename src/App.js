import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Switch, Route, Redirect,  BrowserRouter as Router} from "react-router-dom";
import { rootReducer } from './reducers';
import Home from './scenes/Home';
import Note from './scenes/Note';
import EditNote from './scenes/EditNote';
import {ROUTES} from './constants';
import './App.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
              <Route
                  exact
                  path={ROUTES.home}
                  component={Home}
              />
              <Route
                  exact
                  path={ROUTES.notes}
                  component={Note}
              />
               <Route
                  exact
                  path={ROUTES.edit}
                  component={EditNote}
              />
              <Redirect 
                to={Home}
              />
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
