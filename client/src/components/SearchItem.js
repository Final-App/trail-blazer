function SearchItem(props) {
    console.log(props.brewery)
    return (
        <div>
            {props.brewery.Name?(
        <div className="brewery-item">
        <h2>{props.brewery.Name}</h2>
        <p>{props.brewery.Street}</p>
        <p>{props.brewery.Postal_Code}</p>    
        </div>
            ) : (
                <div className="brewery-item">
        <h2>{props.brewery.name}</h2>
        <p>{props.brewery.street}</p>
        <p>{props.brewery.city}, {props.brewery.state}  {props.brewery.postal_code}</p>
        <a href={props.brewery.website_url}>{props.brewery.website_url}</a>
        <br />
        <button onClick ={()=>{props.handleSelectBrewery(props.brewery)}}>Select</button>
        </div>
            )}
        
        </div>
    )
}
export default SearchItem