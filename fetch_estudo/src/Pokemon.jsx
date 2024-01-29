import { useState, useEffect } from "react";
import axios from "axios";
import { PokeApi } from "./PokeApi";

export function Pokemon() {
  // const url = "https://pokeapi.co/api/v2/pokemon/";
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      // .get("https://pokeapi.co/api/v2/pokemon")
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649/?orderByName=a")
      .then((response) => setList(response.data.results));

    
  }, []);

  

  return (
    <>
      {list.map((item, i) => (
        <PokeApi key={i} data={item} />
      ))}
    </>
  );
}
