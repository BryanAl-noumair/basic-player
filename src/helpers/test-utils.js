import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query';

const history = createMemoryHistory();
const queryClient = new QueryClient();

const customRender = (ui, { customHistory, ...options } = {}) => {
  const AllTheProviders = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Router history={customHistory || history}>{children}</Router>
    </QueryClientProvider>
  );

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything from react testing library
export * from '@testing-library/react';

// override render method and export userEvent
export { customRender as render, userEvent, history };
