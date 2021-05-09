import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Search} from "./scenes/search";
import {Preview} from "./scenes/preview";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/preview/:searchValue/:position">
                <Preview />
            </Route>
            <Route path="/:searchValue">
                <Search />
            </Route>
            <Route path="/">
                <Search />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
