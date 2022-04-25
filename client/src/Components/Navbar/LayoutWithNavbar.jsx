import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import NavBar from './NavBar';

const LayoutWithNavbar = ({ component }) => {
    return (
        <Container fluid className="p-0" style={{ height: '100vh' }}>
            <Row className="g-0" style={{ height: '100%' }}>
                <Col sm={2} style={{ 'background-color': '#212529' }}>
                    <NavBar />
                </Col>
                <Col sm={10} style={{ 'background-color': '#D4D4D6' }}>
                    {component}
                </Col>
            </Row>
        </Container>
    );
};

export default LayoutWithNavbar;
