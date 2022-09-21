import reactLogo from './assets/react.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="hero with-video">
        <Container>
          <h1>Mi página con React-Bootstrap</h1>
          <p>Apenas estoy empezando...</p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Button variant="success">Empezar</Button>
          </div>
        </Container>
        <iframe width="560"  height="315" src="https://www.youtube.com/embed/9Ux0eOPanxE?mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>  
    </div>
  )
}

export default App
