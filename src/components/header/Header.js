import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import man from "../../assets/man.jpg";

export const Header = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">TEST ASSIGNMENT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/">Home</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/about">About me</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <div>
                                    <Image src={man} roundedCircle width={30} height={30} className="mr-1" />
                                    <p>Dmitry</p>
                                    <p>Houston, TX 77084</p>

                                </div>
                            </NavDropdown.Item>
                            {user && (
                                <React.Fragment>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Image src={user.avatar} roundedCircle width={30} height={30} className="mr-1" />
                                        {user.name}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>{user.email}</NavDropdown.Item>
                                </React.Fragment>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
