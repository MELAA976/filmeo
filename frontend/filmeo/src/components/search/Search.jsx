import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router";
import { useParams } from "react-router";



export default function Search() {
    
    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);

    

    useEffect(() => {
        const PROXY = 'https://api.allorigins.win/raw?url='; //autorisation pour le cross origine
        fetch(`${PROXY}https://api.tvmaze.com/search/shows?q=${search}`)
        .then(response => response.json())
        .then(data => setResultSearch(data))
        .catch(error => console.error(error));
    }
        , [search])

    const onSearch = (e) => {
        //console.log(e.target.value);
        setSearch(e.target.value);
    }


    return (
        <>
            <h1>Recherche de série</h1>
            <input type="text" onChange={onSearch} />


            <div>

                { resultSearch && resultSearch.map((result) => {
                     //console.log(result.show.image)
                     return(
                        <div key={result.show.id}>
                            <div className='img'>
                                <img src={result.show.image && result.show.image.medium} alt = {`image de la série ${result.show.name}`} />
                            </div>
                            <div className='describe'>
                                <h2>{result.show.name}</h2>
                                <Link to={`serieshow/${result.show.id}`} >VOIR</Link>
                            </div>
                        </div>
                     )
                }
                )
                }

            </div>
        </>
    )


}



