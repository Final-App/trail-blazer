import React, { useState, useEffect} from "react";
import Searchbar from '../components/Searchbar'
import SearchItem from '../components/SearchItem'
import Button from '@material-ui/core/Button';
import api from '../utils/api'

function Dashboard() {

    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])
    const [brewery, setBrewery] = useState([])
    const [resultCount, setResultCount] = useState(-100);

    const handleInput = event => {
        const {value} = event.target
        setSearchTerm(value)
        //console.log(value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        api.getAPI(searchTerm).then(results => {
            results.data.length > 0 ? setResultCount(results.data.length) : setResultCount(0)
            setResults(results.data)
        })
    }
    const handleSelectBrewery = brewery => {
        api.selectBrewery(brewery).then(results =>{
            //console.log(results)
            api.getallBrewery().then(brewery =>{
                setBrewery(brewery.data)
            })
        })
    }
    const handleDeleteBrewery = id => {
        api.deleteBrewery(id).then(results =>{
            console.log(results, "results from handle delete")
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

    //i want to display a message, conditionally:
    //if the user hasnt searched yet, encourage them to do so
    //if the user has searched and no results come back, give them an error

    return (
       
        <div className="brew-wrapper">
             {console.log(brewery)}
            <div className="search-by-city column">
                <div className="row">
                    <h2>Find nearby breweries:</h2>
                </div>
                <div className="row search-container">
                    <Searchbar 
                        searchTerm={searchTerm} 
                        handleInput={handleInput}  
                        handleSubmit={handleSubmit}/>
                </div>
                <div class="row">
                    {results.length > 0 ? results.map(brewery =>{
                        return (
                                <SearchItem 
                                    brewery={brewery}
                                    handleSelectBrewery={handleSelectBrewery}
                                />
                        )
                    }) : searchTerm.length == 0 ? <div className="alertbox big-gray">Brewery results will appear here.</div> : null
                    }
                    {resultCount == 0 ?  
                        <div className="alertbox error">No results found. Try a different city.</div> : null
                    }
                </div>
                </div>
                <div className="my-saved-breweries column">
                <h2>My Saved Brewery List</h2>
                <div>
                {console.log(brewery)}{
                brewery.length > 0 ? brewery.map(breweries =>{
                    return (
                            <SearchItem 
                                brewery={breweries}
                                handleDeleteBrewery={handleDeleteBrewery}/>
                    )})
                : <div className="alertbox info">No saved breweries.</div>
               }
                </div>
                </div>
            </div>
        )
}
export default Dashboard