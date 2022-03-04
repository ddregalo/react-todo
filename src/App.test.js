import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/what you gonna do about it?/i);
  expect(linkElement).toBeInTheDocument();
});
