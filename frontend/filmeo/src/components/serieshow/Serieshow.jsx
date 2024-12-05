import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useState } from 'react';


export default function Serieshow() {

  const show = useParams();
  const [resultSearchShow, setResultSearchShow] = useState();
  console.log(show.show)

  useEffect(() => {
    const PROXY = 'https://api.allorigins.win/raw?url='; //autorisation pour le cross origine
    fetch(`${PROXY}https://api.tvmaze.com/shows/${show.show}`)
    .then(response => response.json())
    .then(data => setResultSearchShow(data))
    
    .catch(error => console.error(error));
}
    , [])

    
  return (
    
    
    <section className='show'>
    {console.log(resultSearchShow)}
    <div className='show__container'>
      <div className='show__container__img'>
        <img src={resultSearchShow?.image.original} alt="" />
      </div>

      <div className='show__container__describ'>
        
      </div>

    </div>
   /</section>
  )
}
