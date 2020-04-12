import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) =>{
    let changeableURL = url;
    if(country){
        changeableURL = `${url}/countries/${country}`;
    }
    try{
        const {data: {confirmed, recovered,deaths, lastUpdate}} = await axios.get(changeableURL);
        return {confirmed, recovered,deaths, lastUpdate};
    }catch(err){
        console.log('--> fetchData Error ',err);
    }
}

export const fetchDailyData = async () =>{
    // console.log('------fetchDailyData----')
    try{
        const data = await axios.get(`${url}/daily`);
        // console.log('****************Data ' ,data);
        const modifiedData = data && data.data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        // console.log('****************modifiedData ' ,modifiedData);
        return modifiedData;
    }catch(err){

    }
}

export const fetchCountries = async () =>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        console.log('->countries ',countries);
        return countries.map((country)=> country.name);
    }catch(err){
        console.log('--> countries error ',err);
    }
} 

export const getCardsData = (confirmed,recovered,deaths,lastUpdate,styles) =>{
    return [
        {
            label: 'Infected',
            desc: 'Number of Active cases of Covid19',
            value: confirmed.value,
            date: lastUpdate,
            style: styles.infected
        }, {
            label: 'Recovered',
            desc: 'Number of Recovered cases of Covid19',
            value: recovered.value,
            date: lastUpdate,
            style: styles.recovered
        },
        {
            label: 'Deaths',
            desc: 'Number of Deaths of Covid19',
            value: deaths.value,
            date: lastUpdate,
            style: styles.deaths
        }

    ]
}