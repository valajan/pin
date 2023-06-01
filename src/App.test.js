import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from "./stores/store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"


describe('App', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    /**
     * Some basic unit tests to check if admin link is in the document
     * And if the boilerplate pinned image is visible
     */

    // succeeds
    expect(screen.getByText('Admin')).toBeInTheDocument();
    // succeeds
    expect(screen.getByText(/Admin/)).toBeInTheDocument();
    // succeeds
    expect(screen.getByTestId("marker")).toBeVisible();
  });
});