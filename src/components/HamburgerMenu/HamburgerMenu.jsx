import { Button, Container, Form, Offcanvas } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from "../../assets/pictures/Logo/Erkek Ol-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
function HamburgerMenu() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img alt="" src={logo} className="w-32" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menü
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center md:ml-[10%] flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Ana Sayfa</Nav.Link>
                  <Nav.Link href="#action1">Makaleler</Nav.Link>
                  <Nav.Link href="#action2">Bağlantılar</Nav.Link>
                  <NavDropdown
                    title="İletişim"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href="#action4"
                      className="d-flex items-center gap-3"
                    >
                      Instagram
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Twitter</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Facebook
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.shopier.com/ShowProductNew/storefront.php?shop=OErkekOl&sid=QW5OQWlwMGxsUXlEMzlCeTBfLTFfIF8g">
                      Mağaza
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.youtube.com/c/OErkekOl/videos">
                      Rehber Videolar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Portre Çekim Seansı
                    </NavDropdown.Item>{" "}
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default HamburgerMenu;
