import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWithNavbar from './Components/Navbar/LayoutWithNavbar';
import Posts from './Components/Posts/Posts';
import StatsChart from './Components/Stats/StatsChart';

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
