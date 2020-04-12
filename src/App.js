import React from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
export default class App extends React.Component{
    state = {
        data:{ },
        country: ''
    }
    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);
        console.log('--*************> country ',country);
        this.setState({data: fetchedData, country:country});
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({data: fetchedData});
    }
    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}