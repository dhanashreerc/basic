import {Link} from "react-router-dom";
import {Navbar, Container, Nav, } from "react-bootstrap"

function MyNavLink(){
    return(
      <>
        {/* <Link to={"/home"}>Home  |</Link>
        <Link to={"/todo"}>Todo  |</Link>
        <Link to={"/todo-list"}>Todo List  |</Link>
        <Link to={"/user-list"}>User List  |</Link>
        <Link to={"/validation-demo"}>Validation Demo |</Link>
        <Link to={"/registration"}>Registration  |</Link> */}

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">My Todo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/todo"}>Todo</Nav.Link>
              <Nav.Link as={Link} to={"/todo-list"}>Todo List</Nav.Link>
              <Nav.Link as={Link} to={"/user-list"}>User List</Nav.Link>
              <Nav.Link as={Link} to={"/validation-demo"}>Validation Demo</Nav.Link>
              <Nav.Link as={Link} to={"/registration"}>Registration</Nav.Link>
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }

  export default MyNavLink;