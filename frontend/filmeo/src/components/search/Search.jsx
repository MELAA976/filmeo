import React from 'react';
import { useState, useEffect } from 'react';


export default function Search() {
    <script crossorigin src="https://api.tvmaze.com"></script>

    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);



    useEffect(() => {
        const PROXY = 'https://api.allorigins.win/raw?url='; //autorisation pour le cross origine
        fetch(`${PROXY}https://api.tvmaze.com/search/shows?q=${search}`)
        .then(response => response.json())
        .then(data => setResultSearch(data))
        .catch(error => console.error(error));





        /*const PROXY = 'https://api.allorigins.win/raw?url-';
        fetch('https://api.tvmaze.com/recherche/shows?q-girls')
        //fetch(`https://api.tvmaze.com/recherche/shows?q-${search}`)
            .then(response => response.json())
            .then(data => setResultSearch(data))*/
    }
        , [search])

    const onSearch = (e) => {
        //console.log(e.target.value);
        setSearch(e.target.value);
    }


    return (
        <>
            <h1>search</h1>
            <label htmlFor="recherche">recherche:</label>
            <input type="text" onChange={onSearch} />


            <div>

                {resultSearch && resultSearch.map((result) => (console.log(result.show)
                
                ))
                }

            </div>
        </>
    )


}



