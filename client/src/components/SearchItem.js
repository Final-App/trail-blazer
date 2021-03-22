import Button from '@material-ui/core/Button';

function SearchItem(props) {
    //console.log(props.brewery)

    let locationInfo = `City: ${props.brewery.Name}`
    console.log(props.brewery)
    return (
        <div class="row">
            {props.brewery.Name?(
            <div className="brewery-selectable">
                <h4>{props.brewery.Name}</h4>
                <p>{props.brewery.Street}</p>
                <p>
                </p>    
                <Button variant="contained" color="primary" onClick ={()=>{props.handleDeleteBrewery(props.brewery.id)}}>Delete</Button>
            </div>
            ) : (
            <div className="brewery-selectable">
                <div class="brewery-info column">
                    <h4>{props.brewery.name}</h4>
                    <p>{props.brewery.street}</p>
                    <p>{props.brewery.city}, {props.brewery.state}  {props.brewery.postal_code}</p>
                    <p className="smaller"><a href={props.brewery.website_url}>{props.brewery.website_url}</a></p>
                    <Button variant="contained" color="primary" onClick ={()=>{props.handleSelectBrewery(props.brewery)}}>Select</Button>
                </div>
            </div>
            )}
        </div>
    )
}
export default SearchItem