import React, { useState, useEffect } from 'react';
import moment from 'moment';
const WorldCount = () =>{
    const [countObj, setCount] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://corona.lmao.ninja/all').then(res => {
            return res.json()
        }).then(data=>{
            console.log('res => ',data);
            setCount(data);
            setLoading(false);
        })
    },[]);

    const getDate = unixDate =>{
        return moment(unixDate).format('MMMM Do YYYY, h:mm:ss a');
    }

    return(
        <div className="card">
            <h3>World</h3>
            {
                isLoading ? <div>Loading ...</div> : <div className="world-cards">
                <div className="world-card">
                    <p className="death">{countObj.deaths}</p>
                    <p className="death">Confirmed Deaths</p>
                    <p className="updatedAt">Updated At: {getDate(countObj.updated)}</p>
                </div>
                <div className="world-card">
                    <p className="confirmed">{countObj.cases}</p>
                    <p className="confirmed">Confirmed cases</p>
                    <p className="updatedAt">Updated At: {getDate(countObj.updated)}</p>
                </div>
                <div className="world-card">
                    <p className="recoverd">{countObj.recovered}</p>
                    <p className="recoverd">Recovered </p>
                    <p className="updatedAt">Updated At: {getDate(countObj.updated)}</p>
                </div>
                {/* <div className="world-card">Updated At: </div> */}
            </div>
            }
        </div>
    );
}

export default WorldCount;