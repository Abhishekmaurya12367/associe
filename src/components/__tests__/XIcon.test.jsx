import { render } from '@testing-library/react'
import { XIcon } from '../XIcon'

describe('XIcon Component', () => {
  it('renders SVG element', () => {
    const { container } = render(<XIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('has correct viewBox attribute', () => {
    const { container } = render(<XIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('has aria-hidden attribute', () => {
    const { container } = render(<XIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom className', () => {
    const { container } = render(<XIcon className="custom-class" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('custom-class')
  })

  it('has fill currentColor', () => {
    const { container } = render(<XIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('fill', 'currentColor')
  })
})
