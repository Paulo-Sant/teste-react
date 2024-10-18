import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './counter';

test('renders Counter component', () => {
  const { getByText } = render(<Counter />);
  expect(getByText('Counter: 0')).toBeInTheDocument();
});

test('increments counter', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  
  fireEvent.click(incrementButton);
  expect(getByText('Counter: 1')).toBeInTheDocument();
});

test('decrements counter', () => {
  const { getByText } = render(<Counter />);
  const decrementButton = getByText('Decrement');
  
  fireEvent.click(decrementButton);
  expect(getByText('Counter: -1')).toBeInTheDocument();
});
