import { render, screen } from '@testing-library/react'
import { Prose } from '../Prose'

describe('Prose Component', () => {
  it('renders children correctly', () => {
    render(
      <Prose>
        <p>Test Content</p>
      </Prose>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies base prose classes', () => {
    const { container } = render(
      <Prose>
        <div>Content</div>
      </Prose>
    )
    const prose = container.firstChild
    expect(prose).toHaveClass('prose')
  })

  it('applies dark mode classes', () => {
    const { container } = render(
      <Prose>
        <div>Content</div>
      </Prose>
    )
    const prose = container.firstChild
    expect(prose).toHaveClass('dark:prose-invert')
  })

  it('applies custom className', () => {
    const { container } = render(
      <Prose className="custom-class">
        <div>Content</div>
      </Prose>
    )
    const prose = container.firstChild
    expect(prose).toHaveClass('custom-class')
  })

  it('has prose code styling classes', () => {
    const { container } = render(
      <Prose>
        <div>Content</div>
      </Prose>
    )
    const prose = container.firstChild
    expect(prose).toHaveClass('prose-code:p-2')
    expect(prose).toHaveClass('prose-code:bg-slate-300')
  })

  it('has prose heading styling classes', () => {
    const { container } = render(
      <Prose>
        <div>Content</div>
      </Prose>
    )
    const prose = container.firstChild
    expect(prose).toHaveClass('prose-headings:font-extrabold')
    expect(prose).toHaveClass('prose-headings:mt-0')
  })
})
