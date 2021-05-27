const BASE_URL = 'https://restcountries.eu/rest/v2';



const fetchCountries = searchQuery => {
    return fetch(`${BASE_URL}/name/${searchQuery}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(error => {
            console.log('Error:', error);
        }
        )
}
export default { fetchCountries };