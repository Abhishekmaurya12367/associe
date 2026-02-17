import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders with custom component', () => {
    render(
      <Card as="section">
        <div>Section Content</div>
      </Card>
    )
    const section = screen.getByText('Section Content').closest('section')
    expect(section).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <div>Content</div>
      </Card>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  describe('Card.Link', () => {
    it('renders a link with children', () => {
      render(
        <Card>
          <Card.Link href="/test">Link Text</Card.Link>
        </Card>
      )
      const link = screen.getByText('Link Text').closest('a')
      expect(link).toHaveAttribute('href', '/test')
    })
  })

  describe('Card.Title', () => {
    it('renders title with default h2 tag', () => {
      render(
        <Card>
          <Card.Title>Test Title</Card.Title>
        </Card>
      )
      const title = screen.getByText('Test Title')
      expect(title.tagName).toBe('H2')
    })

    it('renders title with custom component', () => {
      render(
        <Card>
          <Card.Title as="h1">Custom Title</Card.Title>
        </Card>
      )
      const title = screen.getByText('Custom Title')
      expect(title.tagName).toBe('H1')
    })

    it('renders title with link when href is provided', () => {
      render(
        <Card>
          <Card.Title href="/test">Linked Title</Card.Title>
        </Card>
      )
      const link = screen.getByText('Linked Title').closest('a')
      expect(link).toHaveAttribute('href', '/test')
    })
  })

  describe('Card.Description', () => {
    it('renders description text', () => {
      render(
        <Card>
          <Card.Description>Test Description</Card.Description>
        </Card>
      )
      expect(screen.getByText('Test Description')).toBeInTheDocument()
      expect(screen.getByText('Test Description').tagName).toBe('P')
    })
  })

  describe('Card.Cta', () => {
    it('renders CTA link with href', () => {
      render(
        <Card>
          <Card.Cta href="/action">Call to Action</Card.Cta>
        </Card>
      )
      const link = screen.getByText('Call to Action').closest('a')
      expect(link).toHaveAttribute('href', '/action')
    })

    it('renders CTA with chevron icon', () => {
      const { container } = render(
        <Card>
          <Card.Cta href="/action">CTA Text</Card.Cta>
        </Card>
      )
      // Check for SVG icon (chevron)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('Card.Eyebrow', () => {
    it('renders eyebrow text', () => {
      render(
        <Card>
          <Card.Eyebrow>Eyebrow Text</Card.Eyebrow>
        </Card>
      )
      expect(screen.getByText('Eyebrow Text')).toBeInTheDocument()
    })

    it('renders with custom component', () => {
      render(
        <Card>
          <Card.Eyebrow as="span">Span Eyebrow</Card.Eyebrow>
        </Card>
      )
      const eyebrow = screen.getByText('Span Eyebrow')
      expect(eyebrow.tagName).toBe('SPAN')
    })

    it('applies decoration when decorate prop is true', () => {
      const { container } = render(
        <Card>
          <Card.Eyebrow decorate>Decorated Eyebrow</Card.Eyebrow>
        </Card>
      )
      const eyebrow = screen.getByText('Decorated Eyebrow')
      expect(eyebrow).toHaveClass('pl-3.5')
      // Check for decoration span
      const decoration = container.querySelector('span[aria-hidden="true"]')
      expect(decoration).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <Card>
          <Card.Eyebrow className="custom-eyebrow">Eyebrow</Card.Eyebrow>
        </Card>
      )
      expect(screen.getByText('Eyebrow')).toHaveClass('custom-eyebrow')
    })
  })
})
