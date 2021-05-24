import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the ui-components Test button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test Button/i);
  expect(linkElement).toBeInTheDocument();
});
