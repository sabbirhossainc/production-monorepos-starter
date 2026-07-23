import { render, screen } from '@testing-library/react'
import { Card } from './card'
 
describe('Card component', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })
 
  it('applies base styles', () => {
    render(<Card>Test</Card>)
    const container = screen.getByText('Test').parentElement
    expect(container).toHaveStyle({ padding: '2rem' })
    expect(container).toHaveStyle({ borderRadius: '0.5rem' })
  })
 
  it('applies children content styling', () => {
    render(<Card>Test</Card>)
    const textElement = screen.getByText('Test')
    expect(textElement).toHaveStyle({ color: '#666' })
  })
 
  it('renders multiple children', () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Content</p>
      </Card>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})