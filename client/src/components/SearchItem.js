function SearchItem(props) {
    return (
        <div className="brewery-item">
        <h2>{props.brewery.name}</h2>
        <p>{props.brewery.street}</p>
        <p>{props.brewery.city}, {props.brewery.state}  {props.brewery.postal_code}</p>
        <a href={props.brewery.website_url}>{props.brewery.website_url}</a>
        <br />
        <button onClick ={()=>{props.handleSelectBrewery(props.brewery)}}>Select</button>
        </div>
    )
}


export default SearchItem