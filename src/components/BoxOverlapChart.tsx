import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const BoxOverlapChart = () => {
    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top', // TypeScript now knows this is a valid literal, not just any string
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    color: '#666',
                },
            },
            title: {
                display: true,
                text: 'Box Overlap Loss',
                align: 'start',
                font: { size: 20, weight: 'bold' },
            },
        },
        scales: {
            x: {
                title: { display: true, text: 'Epochs' },
                grid: { display: false },
            },
            y: {
                min: 0.2,
                max: 0.9,
                ticks: { stepSize: 0.1 },
            },
        },
        elements: {
            line: { tension: 0.3, borderWidth: 3 },
            point: { radius: 0, hitRadius: 20 } // Large hitRadius makes mobile touching easy
        },
    }

    // Estimated data points from your image
    const data = {
        labels: Array.from({ length: 34 }, (_, i) => i),
        datasets: [
            {
                label: 'Box Overlap Loss',
                data: [
                    0.87, 0.48, 0.46, 0.42, 0.37, 0.40, 0.35, 0.36, 0.34, 0.31,
                    0.30, 0.31, 0.31, 0.30, 0.30, 0.29, 0.29, 0.30, 0.31, 0.29,
                    0.34, 0.28, 0.32, 0.31, 0.29, 0.34, 0.29, 0.29, 0.28, 0.31,
                    0.29, 0.29, 0.32, 0.30
                ],
                borderColor: '#712ee1', // The purple color from your image
                backgroundColor: '#712ee1',
                borderWidth: 3,
                tension: 0.3, // Adds the slight smoothing seen in the curve
            },
        ],
    }

    return (
        <div className='w-full lg:w-[50vw] h-[400px] p-2'>
            <Line options={options} data={data} />
        </div>
    )
}

export default BoxOverlapChart