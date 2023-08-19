'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EconomicCalendar() {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/economic-calendar").then(response => {
            setData(response.data)
        })
    }, [])

    return (
        <table className='w-5/6 text-sm m-10 rounded-lg text-left text-gray-500 dark:text-gray-200 bg-gray-900'>
            {
            data && 
            <tbody className='p-10 text-sm'>
                <tr className='p-5 bg-gray-700'>{
                    Object.keys(data).map((head, index) => {
                        return <th className='text-base' key={index}>{ head ? head : "Undefined" }</th>
                    })
                }</tr>
                {
                    Object.values(data.id).map((column, index) => {
                        return (  
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={index}>
                                <td>{ data.id[index] }</td>
                                <td>{ data.date[index] }</td>
                                <td>{ data.time[index] }</td>
                                <td>{ data.zone[index] }</td>
                                <td>{ data.currency[index] }</td>
                                <td>{ data.importance[index] }</td>
                                <td>{ data.event[index] }</td>
                                <td>{ data.actual[index] }</td>
                                <td>{ data.forecast[index] }</td>
                                <td>{ data.previous[index] }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            }
        </table>
    )
}