import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWithNavbar from './LayoutWithNavbar';
import Posts from './Posts';
import StatsChart from './StatsChart';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<LayoutWithNavbar component={<Posts />} />}
                />
                <Route
                    path="stats"
                    element={<LayoutWithNavbar component={<StatsChart />} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
