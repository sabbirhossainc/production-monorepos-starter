import { render, screen } from '@testing-library/react'
import { Input } from './input'
 
describe('Input component', () => {
  it('renders children', () => {
    render(<Input>Test content</Input>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})