'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement, 
  LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Ptax from "@/components/Ptax"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

/*
const Home2 = () => {
  const [ptax, setPTAX] = useState({
    "interm": {
        "10:00": 0, 
        "11:00": 0, 
        "12:00": 0, 
        "13:00": 0
    }, 
    "mean": 0,
    "std": 0
  })
  const [date, setDate] = useState("11/11/2022")
  const labels = ['1', '2', '3', '4']

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/ptax?date=" + date)
    .then(function (response) {
      console.log(response.data)
      setPTAX(response.data)
    })
  }, [date])
  
  return (
    <div className='w-64 text-black bg-white'>
      <input type="date" name="" id="" onChange={(e) => { 
        const [year, month, day] = e.target.value.split('-')
        setDate(`${month}/${day}/${year}`)
      }} />
      <Line
        options={{ responsive: true }}
        data={{
          labels: labels,
          datasets: [
            {
                data: [ptax.interm['10:00'], ptax.interm['11:00'], ptax.interm['12:00'], ptax.interm['13:00']],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
        }}
      />
    </div>
    )
}
*/

const Home = () => {
  return <Ptax />
}

export default Home

/*

const [ptax, setPTAX] = useState({
    "interm": {
        "10:00": 0, 
        "11:00": 0, 
        "12:00": 0, 
        "13:00": 0
    }, 
    "mean": 0,
    "std": 0
  })
  const [date, setDate] = useState("11/11/2022")

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/ptax?date=" + date)
    .then(function (response) {
      setPTAX(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });

    console.log(ptax)
  }, [data])

*/
