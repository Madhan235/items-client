import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();
const handleLogout = () =>{
  localStorage.removeItem("token");
  navigate("/login");

}
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          variant="dark"
          bg="info"
          // className="bg-body-tertiary"
        >
          <Container>
            <Navbar.Brand href="#home">Catalog.in</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={NavLink}
                  to="/home_about_oil_price"
                  active={location.pathname === "/home_about_oil_price"}
                >
                  Line Chart
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/items_quantity_manager"
                  active={location.pathname === "/items_quantity_manager"}
                >
                  Quantity-Manager
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/pie_chart_digital_hell"
                  active={location.pathname === "/pie_chart_digital_hell"}
                >
                  Pie Chart
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/bar_chart_drugs_usage"
                  active={location.pathname === "/bar_chart_drugs_usage"}
                >
                  Bar Chart
                </Nav.Link>
                <NavDropdown title={userName} id="basic-nav-dropdown">
                  <NavDropdown.Item  onClick={handleLogout}>LogOut</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
