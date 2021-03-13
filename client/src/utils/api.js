import axios from "axios";

export default {
    getAPI: function(city){
    // Proper method connecting to back end.
    // return axios.get("/api/brewerysearch/"+city)
    // Testing method to be deleted after back end connnection.
    return axios.get("https://api.openbrewerydb.org/breweries?by_city="+city)
    },
}