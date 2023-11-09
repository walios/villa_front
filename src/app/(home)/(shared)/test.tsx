import axios from 'axios'
import { set } from 'date-fns';
import React, { useState } from 'react'


export default function Test() {
    const [data, setData] = useState([]);
    const url = 'http://localhost:8080/reservation/all_reservations/';

    const meow = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return <button onClick={() => meow()}>test</button>;
}

