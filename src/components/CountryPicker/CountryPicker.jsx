import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.modules.css';
import { fetchCountries } from '../../api';

export const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchCountries();
            setCountries(data);
        }
        getCountries();
    }, [setCountries]);
    return (
        <div className="countryLayout">
            <FormControl className={styles.formControl}>
                <NativeSelect default="" onChange={e => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
