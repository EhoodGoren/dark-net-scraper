import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import Loader from '../Loader/Loader';
import './StatsChart.css';

const StatsChart = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        const getStats = async () => {
            setLoading(true);
            const response = await axios.get(
                'http://localhost:8080/posts/stats'
            );
            const stats = response.data;
            setData({
                labels: Object.keys(stats),
                datasets: [
                    {
                        label: 'stats',
                        data: Object.values(stats),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)',
                        ],
                        hoverOffset: 4,
                    },
                ],
            });
            setLoading(false);
        };
        getStats();
    }, []);

    return (
        <div className="chart-container">
            {loading ? <Loader /> : <></>}
            {Object.keys(data).length > 0 ? <Doughnut data={data} /> : <></>}
        </div>
    );
};

export default StatsChart;
