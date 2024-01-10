import { Chart } from 'chart.js'
import React, { useEffect } from 'react'

const Charts = () => {
    useEffect(() => {
        var canvas = document.getElementById('chartLine') as HTMLCanvasElement
        var ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        var chartLine = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [],
            }
        })
    }, [])
    return (
        <canvas id='chartLine'></canvas>
    )
}

export default Charts