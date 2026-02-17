import { render, screen } from '@testing-library/react'
import { Banner } from '../Banner'

// Mock the ContainerPattern and Pattern components
jest.mock('../ContainerPattern', () => ({
  ContainerPattern: ({ children, className }) => (
    <div data-testid="container-pattern" className={className}>
      {children}
    </div>
  ),
}))

jest.mock('../Pattern', () => ({
  Pattern: ({ className }) => (
    <div data-testid="pattern" className={className} />
  ),
}))

describe('Banner Component', () => {
  it('renders banner section with correct aria-label', () => {
    const { container } = render(<Banner />)
    const section = container.querySelector('section[aria-label="Apply Banner"]')
    expect(section).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<Banner />)
    expect(
      screen.getByText("Launch into AOSSIE's open-source world through GSoC!")
    ).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Banner />)
    expect(
      screen.getByText(
        'Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code.'
      )
    ).toBeInTheDocument()
  })

  it('renders apply link with correct href', () => {
    const { container } = render(<Banner />)
    const linkText = screen.getByText('Apply to GSoC with AOSSIE')
    // The Banner uses legacyBehavior, so Link returns Fragment and anchor is in children
    // Find the anchor tag that contains the text
    const links = container.querySelectorAll('a')
    const applyLink = Array.from(links).find(link => 
      link.textContent.includes('Apply to GSoC with AOSSIE')
    )
    expect(applyLink).toBeInTheDocument()
    // With legacyBehavior, the href might be on a parent or the anchor itself
    // Check if href exists on the link or its parent
    const href = applyLink.getAttribute('href') || applyLink.closest('[href]')?.getAttribute('href')
    expect(href).toBe('/apply')
  })

  it('renders ContainerPattern component', () => {
    render(<Banner />)
    expect(screen.getByTestId('container-pattern')).toBeInTheDocument()
  })

  it('renders Pattern components', () => {
    render(<Banner />)
    const patterns = screen.getAllByTestId('pattern')
    expect(patterns.length).toBeGreaterThan(0)
  })

  it('has correct dark mode classes', () => {
    const { container } = render(<Banner />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('dark:bg-yellow-400')
  })
})
