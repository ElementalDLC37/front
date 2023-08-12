'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EconomicCalendar() {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/economic-calendar").then(response => {
            setData(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <h1>{ data && "oi" }</h1>
    )
}