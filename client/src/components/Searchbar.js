import React from 'react'

function Searchbar(props) {
    return (
        <form id="search-form" onSubmit={props.handleSubmit}>
            <label>Enter a city: </label>
            <input type="text" placeholder="e.g. Chicago, Detroit" value={props.searchTerm} onChange={props.handleInput} />
            <button type="submit">Search</button>
        </form>
    )
}

export default Searchbar

{/* <div>
<form id="city-form">
    <label for="city">city:</label>
    <input 
    type="text" 
    id="city" 
    name="city" 
    placeholder="city"
    value={zip}
    onChange={handleChange}
    />
    <input type="submit" value="submit"/>
</form>
</div> */}