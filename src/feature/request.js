import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Request = ({url}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let receivedData = true;
        
        const loadData = async () => {
            const response = await axios.get(url);
            if (receivedData) {
                setData(response.data)
            }
        };
        loadData();
        
        return () => {
            receivedData = false;
        }
    }, [url]);
    
    if (!data) {
        return <span>Loading data</span>
    }
    
    
    return <span>{data.greeting}</span>
};

export default Request;