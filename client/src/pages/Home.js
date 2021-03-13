import React, { useState } from "react";

import Searchbar from '../components/Searchbar'
import SearchItem from '../components/SearchItem'
import api from '../utils/api'


function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])


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
        const newBrewery = {
            brewery_id: brewery.id
        }
        api.selectBrewery(newBrewery).then(results =>{
            console.log(results)
        })
    }

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
        </div>
        </div>
    )

}




export default Home

// brewery db search by city
// https://api.openbrewerydb.org/breweries?by_city=chicago