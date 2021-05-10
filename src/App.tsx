import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Container } from './App.styles';
import Search from './scenes/search';
import Preview from './scenes/preview';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <Container>
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
    </Container>
  </QueryClientProvider>
);

export default App;
