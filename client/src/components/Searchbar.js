import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Searchbar(props) {
    return (
        <form id="search-form" onSubmit={props.handleSubmit}>
            <label>Enter a city: </label>
            <TextField type="text" placeholder="e.g. Chicago, Detroit" value={props.searchTerm} onChange={props.handleInput} />
            <Button type="submit">Search</Button>
        </form>
    )
}

export default Searchbar

/*{/* <div>
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
</div> */