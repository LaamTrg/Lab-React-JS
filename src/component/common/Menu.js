import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className='text-white bg-dark text-center rounded'>
                <h1>Brand</h1>
            </div>
            <Nav variant="pills" className="flex-column">
            <Nav.Item>
          <NavLink to={"/"} className="nav-link">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/about"} className="nav-link">About</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/event"} className="nav-link">Event</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/team"} className="nav-link">Team</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/work"} className="nav-link">Work</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/service"} className="nav-link">Service</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={"/follow"} className="nav-link">Follow me</NavLink>
        </Nav.Item>
            </Nav>
    </Tab.Container>
    </>
  );
}

export default Menu;