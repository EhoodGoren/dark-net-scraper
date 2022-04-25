import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loader.css';

const Loader = () => {
    return (
        <Spinner
            className="loader"
            animation="border"
            style={{ width: '5rem', height: '5rem' }}
        />
    );
};

export default Loader;
