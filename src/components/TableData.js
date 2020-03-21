import React, { useState , useEffect} from 'react';
import _ from 'lodash';
export const TableData = () =>{
    const [tableData,setTableData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [clonedData,setCloned] = useState([]);

    useEffect(()=>{
        fetch('https://corona.lmao.ninja/countries').then(res => {
            return res.json()
        }).then(data=>{
            console.log('res => ',data);
            setTableData(data);
            setLoading(false);
            let cloned = _.cloneDeep(data);
            setCloned(cloned);
        })
    },[]);

    const isValidArray = arr =>{
        return arr && arr.length ? true :false;
    }
    const renderCells = () =>{

        return isValidArray(tableData) && tableData.map((item,i)=>{
            // eslint-disable-next-line no-unused-expressions
            return <tr key={i}>
                <td>{item.country}</td>
                <td>{item.cases}</td>
                <td>{item.todayCases}</td>
                <td>{item.deaths}</td>
                <td>{item.todayDeaths}</td>
                <td>{item.recovered}</td>
                <td>{item.active}</td>
                <td>{item.critical}</td>
            </tr>
        });
    }

    const filterCountries = (e) =>{
        debugger
        console.log(e.keyCode, e.key)
        if(e.key === "Backspace" && !e.target.value) {
            let tableData = clonedData; 
            setTableData(tableData);
        } else {
            let filteredData = isValidArray(clonedData) && clonedData.filter(item =>item.country.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log('filteredData => ',filteredData )
            setTableData(filteredData);
        }
    }
    return(
        <div className="box2">
            {isLoading ? <div>Loading...</div>:
        <div className="table-container">
          <div className="search-box">
              <p>Search</p>
              <input name='search'
              onKeyDown={filterCountries.bind(this)}/>
          </div>
            
          <table>
            <thead>
                <tr>
                <th>Country</th>
                <th>Cases</th>
                <th>TodayCases</th>
                <th>Deaths</th>
                <th>TodayDeaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Critical</th>
            </tr>
            </thead>
            <tbody>
                {renderCells()}
            </tbody>
          </table>
        </div>
         }
      </div>
    )
}