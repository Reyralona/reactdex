import { React, useState, useEffect } from "react";
import "../src/card.css"

function title(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
}

export default function Card(Props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Props.PokeId}`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

 

  return <div className="pokecard">
    {loading && <div>Loading...</div>}
    {error && (<div>Error!</div>)}
    {data && 
        <div className="pokecardcontent">
            <img src={data.sprites.other["official-artwork"].front_default} className="pokecardimage"/>
            <div className="pokecardid">#{data.id.toString().padStart(4, '0')}</div>
            <div className="pokecardname">{title(data.name)}</div>
        </div>
    }
  </div>;
}
