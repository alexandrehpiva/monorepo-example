import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@monorepo/ui-components';

test('renders the ui-components Test button', () => {
  render(<Button name="Test Button" />);
  const btnElement = screen.getByText(/Test Button/i);
  
  expect(btnElement).toBeInstanceOf(HTMLButtonElement);
  expect(btnElement.innerHTML).toBe('Test Button');
});
