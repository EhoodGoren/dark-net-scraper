import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import StatsChart from './StatsChart';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="stats" element={<StatsChart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
