import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

// Mock FontAwesome icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, 'aria-label': ariaLabel, ...props }) => (
    <span data-testid={`icon-${icon.iconName}`} aria-label={ariaLabel} {...props} />
  ),
}))

jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faEnvelope: { iconName: 'envelope' },
}))

jest.mock('@fortawesome/free-brands-svg-icons', () => ({
  faDiscord: { iconName: 'discord' },
  faGithub: { iconName: 'github' },
  faGitlab: { iconName: 'gitlab' },
}))

// Mock XIcon component
jest.mock('../XIcon', () => ({
  XIcon: ({ className }) => <div data-testid="x-icon" className={className} />,
}))

describe('Footer Component', () => {
  it('renders footer element', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Ideas')).toBeInTheDocument()
    expect(screen.getByText('Apply')).toBeInTheDocument()
  })

  it('navigation links have correct hrefs', () => {
    render(<Footer />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about')
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/projects')
    expect(screen.getByText('Ideas').closest('a')).toHaveAttribute('href', '/ideas')
    expect(screen.getByText('Apply').closest('a')).toHaveAttribute('href', '/apply')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2016-2025 AOSSIE/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    const { container } = render(<Footer />)
    
    // Check for email link
    const emailLink = container.querySelector('a[href="mailto:aossie.oss@gmail.com"]')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('aria-label', 'Contact by Mail')
    
    // Check for GitLab link
    const gitlabLink = container.querySelector('a[href="https://gitlab.com/aossie"]')
    expect(gitlabLink).toBeInTheDocument()
    expect(gitlabLink).toHaveAttribute('aria-label', 'Follow on GitLab')
    
    // Check for GitHub link
    const githubLink = container.querySelector('a[href="https://github.com/AOSSIE-Org"]')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('aria-label', 'Follow on GitHub')
    
    // Check for Discord link
    const discordLink = container.querySelector('a[href="https://discord.gg/hjUhu33uAn"]')
    expect(discordLink).toBeInTheDocument()
    expect(discordLink).toHaveAttribute('aria-label', 'Join on Discord')
    
    // Check for X/Twitter link
    const xLink = container.querySelector('a[href="https://twitter.com/aossie_org"]')
    expect(xLink).toBeInTheDocument()
    expect(xLink).toHaveAttribute('aria-label', 'Follow on X (Twitter)')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByTestId('icon-envelope')).toBeInTheDocument()
    expect(screen.getByTestId('icon-gitlab')).toBeInTheDocument()
    expect(screen.getByTestId('icon-github')).toBeInTheDocument()
    expect(screen.getByTestId('icon-discord')).toBeInTheDocument()
    expect(screen.getByTestId('x-icon')).toBeInTheDocument()
  })

  it('has correct dark mode classes', () => {
    const { container } = render(<Footer />)
    // Check for dark mode classes in navigation links
    const navLinks = container.querySelectorAll('a[href="/about"]')
    expect(navLinks.length).toBeGreaterThan(0)
    // The dark mode classes are on the navigation links, not the footer itself
    const navContainer = container.querySelector('.flex.gap-5')
    expect(navContainer).toHaveClass('dark:text-zinc-200')
  })
})
