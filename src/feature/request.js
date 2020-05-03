import React, { useState } from 'react'
import axios from 'axios'

export default function Request({ url }) {
    const [state, setState] = useState('');
    
    
    const fetchStatus = async () => {
        const response = await axios.get(url);
        const { status } =  response.data;
        setState(status)
    };
    
    
    return (
        <div>
            <button onClick={fetchStatus} >
                btn
            </button>
            {state ? <h1>{state}</h1> : null}
        </div>
    )
}
