import Container from '/components/atoms/Container'

const Footer = () => (
  <footer id="site-footer" className="site-footer">
    <Container>
      <p id="colophon">
        &copy; {new Date().getFullYear()} Company Name. Developed by{' '}
        <a href="https://codeforge.agency" target="_blank" rel="noopener noreferrer">
          Code Forge Agency
        </a>
        .
      </p>
    </Container>
  </footer>
)

export default Footer
