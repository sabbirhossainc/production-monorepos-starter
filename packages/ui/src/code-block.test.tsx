import { render, screen } from '@testing-library/react'
import { CodeBlock } from './code-block'
 
describe('CodeBlock component', () => {
  it('renders code content', () => {
    render(<CodeBlock code="console.log('test')" />)
    expect(screen.getByText("console.log('test')")).toBeInTheDocument()
  })
 
  it('applies monospace font', () => {
    render(<CodeBlock code="test" />)
    const container = screen.getByText('test').closest('pre')?.parentElement
    expect(container).toHaveStyle({ fontFamily: 'monospace' })
  })
 
  it('uses default language javascript', () => {
    render(<CodeBlock code="const x = 1" />)
    expect(screen.getByText('const x = 1')).toBeInTheDocument()
  })
 
  it('accepts custom language prop', () => {
    render(<CodeBlock code="def foo():" language="python" />)
    expect(screen.getByText('def foo():')).toBeInTheDocument()
  })
 
  it('applies dark background', () => {
    render(<CodeBlock code="test" />)
    const container = screen.getByText('test').closest('pre')?.parentElement
    expect(container).toHaveStyle({ backgroundColor: '#333333' })
  })
})