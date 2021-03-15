import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../imagenes/corn.svg";

const NavbarAP = () => {
  const styles = {
    titulo: {
      fontWeight: 700,
    },
    logo: {
      width: 30,
      height: 30,
      marginLeft: "-4px",
      marginTop: "-12px",
    }
  };

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand style={styles.titulo} href="/">
          ArepasPremium
          <img style={styles.logo} alt="logo de arepas premium" src={Logo} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="Productos">Productos</Nav.Link>
            <Nav.Link href="Nosotros">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarAP;
