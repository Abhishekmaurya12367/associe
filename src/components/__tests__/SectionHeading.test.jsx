import { render, screen } from '@testing-library/react'
import { SectionHeading } from '../SectionHeading'

describe('SectionHeading Component', () => {
  it('renders heading text correctly', () => {
    render(<SectionHeading>Test Heading</SectionHeading>)
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders as h2 by default', () => {
    const { container } = render(<SectionHeading>Heading</SectionHeading>)
    const heading = container.querySelector('h2')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Heading')
  })

  it('applies custom className', () => {
    const { container } = render(<SectionHeading className="custom-class">Heading</SectionHeading>)
    const heading = container.querySelector('h2')
    expect(heading).toHaveClass('custom-class')
  })

  it('has correct styling classes for light and dark mode', () => {
    const { container } = render(<SectionHeading>Heading</SectionHeading>)
    const heading = container.querySelector('h2')
    expect(heading).toHaveClass('text-[#00843D]')
    expect(heading).toHaveClass('dark:text-yellow-400')
  })

  it('has ring styling classes', () => {
    const { container } = render(<SectionHeading>Heading</SectionHeading>)
    const heading = container.querySelector('h2')
    expect(heading).toHaveClass('ring-1')
    expect(heading).toHaveClass('ring-inset')
  })

  it('forwards additional props', () => {
    const { container } = render(<SectionHeading data-testid="custom-heading">Heading</SectionHeading>)
    const heading = container.querySelector('[data-testid="custom-heading"]')
    expect(heading).toBeInTheDocument()
  })
})
