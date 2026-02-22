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

const ValidationChart = () => {
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
                text: 'Validation Accuracy',
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
                min: 0.6,
                max: 1.0,
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
                label: 'Validation Accuracy',
                // Starts ~0.65, peaks at 0.90, then fluctuates
                data: [
                    0.65, 0.72, 0.78, 0.85, 0.81, 0.79, 0.81, 0.84, 0.86, 0.89,
                    0.91, 0.78, 0.76, 0.82, 0.83, 0.84, 0.78, 0.79, 0.82, 0.83,
                    0.79, 0.85, 0.81, 0.76, 0.79, 0.83, 0.83, 0.79, 0.83, 0.82,
                    0.75, 0.83, 0.82, 0.76, 0.85, 0.82, 0.82, 0.83, 0.78, 0.79, 0.82
                ],
                borderColor: '#4CAF50', // Success Green
                backgroundColor: '#4CAF50',
                borderWidth: 2,
                tension: 0.3, // Smoother curve
            },
        ],
    }

    return (
        <div className='w-full lg:w-[40vw] h-[400px] p-2'>
            <Line options={options} data={data} />
        </div>
    )
}

export default ValidationChart