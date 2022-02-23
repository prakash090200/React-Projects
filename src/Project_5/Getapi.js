import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import axios from 'axios'
export default function Getapi() {

    const [data, setData] = useState(null);

    async function getapi() {
        // const respond = await fetch("https://data.covid19india.org/data.json");
        // const result = await respond.json();

             //*****OR *********

        const result=await axios.get("https://data.covid19india.org/data.json");
        console.log(result); /* Very IP */

        
        setData(result.data.statewise);
    }
    useEffect(() => {
        getapi();
    }, [])
    if (!data) return ""
    return (

        <table >
            <thead>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>recovered</th>
                    <th>deaths</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((ele, index) => {
                        return (
                            <tr key={index}>
                                <td>{ele.state}</td>
                                <td>{ele.confirmed}</td>
                                <td>{ele.recovered}</td>
                                <td>{ele.deaths}</td>
                                <td>{ele.active}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}
