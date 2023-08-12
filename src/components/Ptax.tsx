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
import axios from 'axios';

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
    const [date, setDate] = useState(new Date().toLocaleDateString('en-US'))
    const [ptax, setPtax] = useState(null)
    
    useEffect(() => {
        axios.get("http://127.0.0.1:5000/ptax?date=" + date).then(response => {
            setPtax(response.data)
        })
    }, [date])

    return (
        <section className='bg-gray-900 w-64 rounded-lg m-10'>
            <header className="flex justify-between items-center bg-gray-700">
                <label className='bg-gray-500 rounded-md m-2 p-1 h-full'>{date}</label>
                <input 
                className='text-black m-2'
                type="date" 
                onChange={(e) => { 
                    const [year, month, day] = e.target.value.split('-')
                    setDate(`${month}/${day}/${year}`)
                }} 
                />
            </header>
            <Line 
            options={{
                responsive: true,
            }} 
            data={{
                labels,
                datasets: [
                    {
                        label: 'PTAX',
                        data: ptax ? labels.map(label => ptax.interm[label]) : [0, 0, 0, 0],
                        borderColor: 'rgb(255, 115, 0)',
                        backgroundColor: 'rgb(255, 115, 0)',
                    },
                ],
            }}
            />
            <footer className='flex justify-around'>
                <div className='flex flex-col items-center'>
                    <strong>Média</strong>
                    <p>{ ptax ? ptax.mean.toFixed(1) : 0 }</p>
                </div>
                <div className='flex flex-col items-center'>
                    <strong>Desvio</strong>
                    <p>{ ptax ? ptax.std.toFixed(1) : 0 }</p>
                </div>
            </footer>
        </section>
    )
}
