import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css'



const NavbarTop = () => {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><Link className='link' to='/'>DataFlow</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
              <NavDropdown title="Navigate" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Link className='link' to='/Users'>Users</Link></NavDropdown.Item>
              </NavDropdown>
      </Nav>
     </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default NavbarTop