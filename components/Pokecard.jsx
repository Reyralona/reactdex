import { React, useState, useEffect } from "react";
import "../src/card.css";
import { title } from "/src/tools.js";

export default function Pokecard(Props) {
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

  return (
    <div className="pokecard">
      {loading && <div className="loadingcard">
        <img src="../loading.gif" alt="loading"/></div>}
      {error && <div>Error!</div>}
      {data && (
        <div className="pokecardcontent">
          <img
            alt={data.name}
            src={data.sprites.other["official-artwork"].front_default}
            className="pokecardimage"
          />
          <div className="pokecardid">
            #{data.id.toString().padStart(4, "0")}
          </div>
          <div className="pokecardname">{title(data.name)}</div>
          <div className="pokecardtypes">
            {data.types.map((type, i) => {
              let typename = data.types[i].type.name;
              return (
                <div
                  key={`${data.name}_type_${i}_${typename}`}
                  className={`type-item type-${typename}`}
                >
                  {title(typename)}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
