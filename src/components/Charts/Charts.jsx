import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

export const Charts = ({data: {confirmed,recovered,deaths},country}) =>{
    const [dailyData, setDailyData] = useState({});

    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        } 
        console.log('-dailyData',dailyData)
        fetchAPI();
    },[]);

    const LineChart = (
        dailyData && dailyData.length ? 
        <Line
            data={{
                labels: dailyData.map(({date})=> date),
                datasets: [{
                    data: dailyData.map(({confirmed})=> confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.map(({deaths})=> deaths),
                    label: 'Deaths',
                    backgroundColor: 'rgba(255, 0,0, 0.5)',
                    fill: true
                }]
            }}
        /> : null
    );

    console.log('--> confirmed ',confirmed ? confirmed.value : '',
    recovered ? recovered.value : '',deaths ? deaths.value : '')
    const barChart =(
        confirmed && confirmed.value ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor:[
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }],
                }}
                options={{
                    legend: {display: false},
                    title: { display: true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    )
    return(
        <div className={styles.container}>
            
            {country ? barChart : LineChart}
        </div>
    )
}
