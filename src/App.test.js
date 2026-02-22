import { render, screen } from '@testing-library/react';
import App from './App';

// Normal Test Cases
test('renders Jane Doe profile', () => {
  render(<App />);
  const nameElement = screen.getByText(/Jane Doe/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders John Smith profile', () => {
  render(<App />);
  const nameElement = screen.getByText(/John Smith/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders Alice Johnson profile', () => {
  render(<App />);
  const nameElement = screen.getByText(/Alice Johnson/i);
  expect(nameElement).toBeInTheDocument();
});

// Edge Test Cases
test('renders card with empty name', () => {
  render(<App />);
  const nameElement = screen.getByText(/noname@example.com/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders card with empty email', () => {
  render(<App />);
  const nameElement = screen.getByText(/No Email User/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders card with empty photo', () => {
  render(<App />);
  const nameElement = screen.getByText(/No Photo/i);
  expect(nameElement).toBeInTheDocument();
});