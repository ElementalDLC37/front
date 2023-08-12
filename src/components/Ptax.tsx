'use client'
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Ptax() {
    const labels = ['10:00', '11:00', '12:00', '13:00']
    const [date, setDate] = useState()

    useEffect(() => {

    }, [])

    return (
        <section>
            <input type="date" name="" id="" onChange={(e) => { 
                
                setDate()
            }} />
            <Line 
            options={{
                responsive: true,
            }} 
            data={{
                labels,
                datasets: [
                    {
                        label: 'PTAX',
                        data: labels.map(() => Math.random()),
                        borderColor: 'rgb(255, 115, 0)',
                        backgroundColor: 'rgb(255, 115, 0)',
                    },
                ],
            }}
            />
        </section>
    )
}
