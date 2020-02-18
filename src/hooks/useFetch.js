import { useState, useEffect } from "react";

//fetches data given url
//returns [data, loading]

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState('');

        async function fetchUrl() {

            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            }

            catch(error) {
                setError(errorMessage)
            }
            
        }

    useEffect(() => {
        fetchUrl();
    }, []);
    
    return [data, loading, errorMessage];
    }
export { useFetch };