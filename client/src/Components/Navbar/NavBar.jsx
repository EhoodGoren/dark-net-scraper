import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark" className="ps-2" sticky="top">
            <Nav
                variant="pills"
                className="flex-column"
                activeKey={location.pathname}
            >
                <Nav.Item>
                    <Nav.Link href="/">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/stats">Statistics</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
