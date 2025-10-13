"use client"

import { Line } from "react-chartjs-2"
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
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

function getRandomGraphData(min = -3, max = 1, noise = 0.3) {
    const ages = [50, 55, 60, 65, 70, 75, 80, 85, 90]
    const step = (max - min) / (ages.length - 1) // base decline per step

    return ages.map((_, i) => {
        // Linear downward value
        const base = max - step * i

        // Add small random noise to avoid perfectly straight line
        const jitter = (Math.random() * 2 - 1) * noise

        return parseFloat((base + jitter).toFixed(2))
    })
}

export default function TScoreChart() {
    const data = {
        labels: [50, 55, 60, 65, 70, 75, 80, 85, 90],
        datasets: [
            {
                label: "Female Spine",
                data: getRandomGraphData(),
                borderColor: "#ba68c8",
                backgroundColor: "#ba68c8",
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: false,
                tension: 0.4,
            },
            {
                label: "Female Total",
                data: getRandomGraphData(),
                borderColor: "#f06292",
                backgroundColor: "#f06292",
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: false,
                tension: 0.4,
            },
            {
                label: "Male Spine",
                data: getRandomGraphData(-2, 1.5),
                borderColor: "#64b5f6",
                backgroundColor: "#64b5f6",
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: false,
                tension: 0.4,
            },
            {
                label: "Male Total",
                data: getRandomGraphData(-2, 1.5),
                borderColor: "#4fc3f7",
                backgroundColor: "#4fc3f7",
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: false,
                tension: 0.4,
            },
        ],
    }

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "#e0e0e0",
                },
            },
            title: {
                display: true,
                text: "T-scores of your Bone",
                color: "#e0e0e0",
                font: {
                    size: 18,
                    style: "italic",
                },
            },
            subtitle: {
                display: true,
                text: "Based on age and sex",
                color: "#e0e0e0"
            },
        },
        scales: {
            x: {
                ticks: { color: "#e0e0e0" },
                grid: { color: "rgba(255,255,255,0.1)" },
            },
            y: {
                min: -3.5,   // ✅ fix range like original
                max: 3,
                ticks: { color: "#e0e0e0" },
                grid: { color: "rgba(255,255,255,0.1)" },
            },
        },
        animation: {
            duration: 2000,
            easing: "easeInOutQuad",
        },
    }

    return (
        <Line data={data} options={options} />
    )
}
