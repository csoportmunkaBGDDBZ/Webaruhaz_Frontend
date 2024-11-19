import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/public" className="navbar-brand">
            Public
          </Link>
          <Nav className="me-auto">
            <Link to="/public" className="navbar-brand">
              Termék
            </Link>

            <Link to="/admin" className="navbar-brand">
              Admin
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
