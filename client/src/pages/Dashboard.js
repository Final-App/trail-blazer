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
    useEffect(()=> {
        api.getallBrewery().then(brewery =>{
            setBrewery(brewery.data)
        }) 
    }, [])


    return (
        <div class="search-and-save-container">
            <div class="search-container row">
                <Searchbar searchTerm={searchTerm} handleInput={handleInput}  handleSubmit={handleSubmit}/>
            </div>
            <div class="row">
                <div className="search-results column">
                <h3>Breweries Nearby</h3>
                    {results.length > 0 ? results.map(brewery =>{
                        return (
                                <SearchItem 
                                    brewery={brewery}
                                    handleSelectBrewery={handleSelectBrewery}
                                />
                        )
                    }) : 
                    <div className="alertbox info">No results found.</div>
                    }
                </div>
                <div className="selected-container column">
                <h3>My Selected Breweries</h3>
                        
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
        </div>
    )
}
export default Dashboard
// brewery db search by city
// https://api.openbrewerydb.org/breweries?by_city=chicago