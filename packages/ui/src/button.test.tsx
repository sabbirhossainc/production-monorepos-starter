import { render, screen } from '@testing-library/react'
import { Button } from './button'
 
describe('Button component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
 
  it('applies primary variant by default', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button.style.backgroundColor).toMatch(/243,\s*239,\s*0/)
  })
})