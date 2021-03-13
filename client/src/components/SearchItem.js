function SearchItem(props) {
    return (
        <div className="brewery-item">
        <h2>{props.brewery.name}</h2>
        <p>{props.brewery.street}</p>
        <br />
        <p>{props.brewery.city}, {props.brewery.state}  {props.brewery.postal_code}</p>
        <br />
        <a href={props.brewery.website_url}>{props.brewery.website_url}</a>


        </div>
    )
}


export default SearchItem