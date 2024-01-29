import { useState, useEffect } from "react";
import axios from "axios";
import { PokeApi } from "./PokeApi";

export function Pokemon() {
  // const url = "https://pokeapi.co/api/v2/pokemon/";
  const [list, setList] = useState([]);
  const [filters, setFilters] = useState({ page: 0, resultsPerPage: 20 });
  const [totalPokemon, setTotalPokemon] = useState(0);
  useEffect(() => {
    axios
      // .get("https://pokeapi.co/api/v2/pokemon")
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${filters.page}&limit=${filters.resultsPerPage}`
      )
      .then((response) => {
        setList(response.data.results);
        setTotalPokemon(response.data.count);
      });

    // fetch("https://pokeapi.co/api/v2/pokemon", {
    //   method: "GET",
    //   cache: "no-cache", //não está salvando nada em cache. Vantagem do FETCH
    // })
    //   .then((response) => response.json())
    //   .then((response) => setList(response.results));
  }, [filters]);

  return (
    <>
      {list.map((item, i) => (
        <PokeApi key={i} data={item} />
      ))}
      <hr />
      Total de Pg:
      {Math.floor(totalPokemon / filters.resultsPerPage)}
      {filters.page / 20 >= 1 && (
        <span
          onClick={() =>
            setFilters((prev) => ({ ...prev, page: prev.page - 20 }))
          }
        >
          {"<"}
        </span>
      )}
      Pagina atual:{filters.page / 20}
      <span
        onClick={() =>
          setFilters((prev) => ({ ...prev, page: prev.page + 20 }))
        }
      >
        {">"}
      </span>
    </>
  );
}
