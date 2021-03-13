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

    // const handleSelectBrewery

    return (
        <>
        <p>SEARCH</p>
        <Searchbar searchTerm={searchTerm} handleInput={handleInput}  handleSubmit={handleSubmit}/>
        <div className="search-results">
        {results.length > 0 ? results.map(brewery =>{
            return (
                    <SearchItem 
                        brewery={brewery}
                        // handleSelectBrewery={handleSelectBrewery}
                    />
            )
        }) : "No breweries found" }
        </div>
        </>
    )

}




export default Home

// brewery db search by city
// https://api.openbrewerydb.org/breweries?by_city=chicago