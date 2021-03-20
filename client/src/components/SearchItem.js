import Button from '@material-ui/core/Button';

function SearchItem(props) {
    //console.log(props.brewery)
    return (
        <div>
            {props.brewery.Name?(
        <div className="brewery-item">
        <h2>{props.brewery.Name}</h2>
        <p>{props.brewery.Street}</p>
        <p>{props.brewery.Postal_Code}</p>    
        <Button size="small" variant="outlined" onClick ={()=>{props.handleDeleteBrewery(props.brewery.id)}}>Delete</Button>
        </div>
            ) : (
                <div className="brewery-item">
        <h2>{props.brewery.name}</h2>
        <p>{props.brewery.street}</p>
        <p>{props.brewery.city}, {props.brewery.state}  {props.brewery.postal_code}</p>
        <a href={props.brewery.website_url}>{props.brewery.website_url}</a>
        <br />
        <Button size="small" variant="outlined" onClick ={()=>{props.handleSelectBrewery(props.brewery)}}>Select</Button>
        </div>
            )}
        
        </div>
    )
}
export default SearchItem