import React from 'react';
import { useState, useEffect } from 'react';


export default function Search(){

    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);

    

    useEffect(()=>{
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=${search}`)
    .then(response => response.json())
    .then(data => setResultSearch(data))}
    ,[search])

    const onSearch = (e) =>{
        //console.log(e.target.value);
        setSearch(e.target.value);
        
    }


  return (
        <>
            <h1>search</h1>
            <label htmlFor="recherche">recherche:</label>
            <input type="text" onChange={onSearch} />

            <div>
                {resultSearch.map(()=)}
            </div>
        </>
  )


}



