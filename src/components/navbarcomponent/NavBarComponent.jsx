import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidget';
import { Link } from "react-router-dom";
import { useCategory } from '../hooks/useCategory';


const NavBarComponent = ()=> {

const {category} = useCategory()

   return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to='/'>Tienda diego</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           {
            category.map((item , index)=>{
              return <NavDropdown.Item key={index} href="#action/3.1">
                <Link to={'/category/${item}'}>{item}</Link>
              </NavDropdown.Item>
            })
           }
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidget/>
    </Container>
  </Navbar>
   ) 
}

export default NavBarComponent;