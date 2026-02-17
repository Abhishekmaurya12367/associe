import { render, screen } from '@testing-library/react'
import { Container } from '../Container'

describe('Container Component', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Content</div>
      </Container>
    )
    // Check if custom class is applied to outer container
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Container ref={ref}>
        <div>Content</div>
      </Container>
    )
    expect(ref.current).toBeTruthy()
  })

  describe('Container.Outer', () => {
    it('renders outer container with children', () => {
      render(
        <Container.Outer>
          <div>Outer Content</div>
        </Container.Outer>
      )
      expect(screen.getByText('Outer Content')).toBeInTheDocument()
    })

    it('applies custom className to outer container', () => {
      const { container } = render(
        <Container.Outer className="outer-class">
          <div>Content</div>
        </Container.Outer>
      )
      expect(container.firstChild).toHaveClass('outer-class')
    })
  })

  describe('Container.Inner', () => {
    it('renders inner container with children', () => {
      render(
        <Container.Inner>
          <div>Inner Content</div>
        </Container.Inner>
      )
      expect(screen.getByText('Inner Content')).toBeInTheDocument()
    })

    it('applies custom className to inner container', () => {
      const { container } = render(
        <Container.Inner className="inner-class">
          <div>Content</div>
        </Container.Inner>
      )
      expect(container.firstChild).toHaveClass('inner-class')
    })
  })
})
