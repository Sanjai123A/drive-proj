import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "./Home.css";
import banner from "./images/b.jpg";

const MyNavbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">EDGECUT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/furnitures" className="nav-link-custom">FURNITURES</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">CONTACT US</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-link-custom">BLOGS</Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link-custom login-btn">LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel Section */}
      <Carousel className="hero-carousel">
        <Carousel.Item className="carousel-item-custom">
          <img className=" card d-block w-100" src={banner} alt="Furniture 1" />
          <Carousel.Caption className="bcontent">
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br><br></br>



      <div className="login-page">
  <div className="login-container">
    <h2>Login</h2>
    <form>
      <div className="input-group">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" required />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
      </div>
      <div className="text-right">
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
    <p className="signup-link">Not a Member? <a href="#">Signup</a></p>
  </div>
</div>


    </>
  );
};

export default MyNavbar;
