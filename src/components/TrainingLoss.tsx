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

const TrainingLoss = () => {
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
                text: 'Training Loss',
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
                min: 0.0,
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
                label: 'Training Loss',
                // Estimated values mapped from your second image
                data: [
                    0.50, 0.65, 0.30, 0.17, 0.42, 0.67, 0.28, 0.14, 0.14, 0.00,
                    0.56, 0.03, 0.01, 0.06, 0.49, 0.12, 0.07, 0.04, 0.03, 0.00,
                    0.02, 0.09, 0.04, 0.07, 0.10, 0.00, 0.01, 0.04, 0.03, 0.02,
                    0.44, 0.00, 0.00, 0.01
                ],
                borderColor: '#1f77b4', // Standard blue
                backgroundColor: '#1f77b4',
                borderWidth: 3,
                tension: 0.3,
            },
        ],
    }

    return (
        <div className='w-full lg:w-[40vw] h-[400px] p-2'>
            <Line options={options} data={data} />
        </div>
    )
}

export default TrainingLoss