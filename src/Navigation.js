import './App.css';
import {Link} from "react-router-dom";
import {Nav, NavItem, Container, Col, Button} from "react-bootstrap";

function Navigation() {
    return(
       <Container>
        <Nav as="ul">
            <Col><Nav.Item as="li">
                <Link to={"/"}>
                    <Button>Home</Button>
                </Link>
            </Nav.Item></Col>

            <Col><Nav.Item as="li">
                <Link to={"/about"}>
                    <Button>About</Button>
                </Link>
            </Nav.Item></Col>

            <Col><Nav.Item as="li">
                <Link to={"/contact"}>
                    <Button>Contact</Button>
                </Link>
            </Nav.Item></Col>
        </Nav>
</Container>
    );
}

export default Navigation;