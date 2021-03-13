import React from 'react'

function Searchbar(props) {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <input type="text" placeholder="Search by city." value={props.searchTerm} onChange={props.handleInput} />
            <button type="submit">Search</button>
        </div>
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