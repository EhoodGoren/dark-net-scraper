import React from 'react';
import loader from './loader.gif';
import './loader.css';

const Loader = () => {
    return <img className="loader" src={loader} alt={'loader'} />;
};

export default Loader;
