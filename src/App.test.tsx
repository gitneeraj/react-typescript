import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('should render', () => {
  render(<App />)
  const linkElement = screen.getByText(/hello, friend/i)
  expect(linkElement).toBeInTheDocument()
})
