import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/navBar/NavBar.css';
import st from 'settings';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconPlur from 'materials/eukhch1U.png';

export default function NarBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href={`${st.fedRoot}/main`} style={{display: "flex"}}>
          <div>
            <img src={iconPlur} />
          </div>
          <div>
            Heiwa
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={`${st.fedRoot}/main`}>Home</Nav.Link>
            {/* <Nav.Link href="/airdrop">Airdrop</Nav.Link> */}
            <NavDropdown title="Statistic" id="basic-nav-dropdown">
              <NavDropdown.Item href={`${st.fedRoot}/statistic/general`}>General</NavDropdown.Item>
              <NavDropdown.Item href={`${st.fedRoot}/statistic/airdrop`}>Airdrop</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}