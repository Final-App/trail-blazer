import React, { useState, useEffect} from "react";
import Searchbar from '../components/Searchbar'
import SearchItem from '../components/SearchItem'
import api from '../utils/api'
function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])
    const [brewery, setBrewery] = useState([])
    const handleInput = event => {
        const {value} = event.target
        setSearchTerm(value)
        console.log(value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        api.getAPI(searchTerm).then(results => {
            console.log(results)
            setResults(results.data)
        })
    }
    const handleSelectBrewery = brewery => {
         
        api.selectBrewery(brewery).then(results =>{
            console.log(results)
            api.getallBrewery().then(brewery =>{
                setBrewery(brewery.data)
            })
        })
    }
    /*useEffect(()=> {
        api.getallBrewery().then(brewery =>{
            setBrewery(brewery.data)
        })
     
    })*/

    return (
        <div class="search-and-save-container">
        <div class="search-container">
        <p>SEARCH</p>
        <Searchbar searchTerm={searchTerm} handleInput={handleInput}  handleSubmit={handleSubmit}/>
        <div className="search-results">
        {results.length > 0 ? results.map(brewery =>{
            return (
                    <SearchItem 
                        brewery={brewery}
                        handleSelectBrewery={handleSelectBrewery}
                    />
            )
        }) : "No breweries found" }
        </div>
        </div>
        <div class="selected-container">
            <p>Selected</p>
                
           {console.log(brewery)}
           {brewery.length > 0 ? brewery.map(breweries =>{
            return (
                    <SearchItem 
                        brewery={breweries}
            
                    />
            )
        }) : "No breweries found" }
        </div>
        </div>
    )
}
export default Dashboard
// brewery db search by city
// https://api.openbrewerydb.org/breweries?by_city=chicago