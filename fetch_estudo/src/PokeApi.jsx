import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./PokeApi.module.css";

export function PokeApi({ data, i }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
    // .then((resp) => console.log(data));
  }, [data]);

  if (details === null) {
    return <div>-</div>;
    //enquanto details for null, não mostrar nada
  }
  return (
    <div className={styles.mother}>
      <div className={styles.poke_card}>
        <header className={styles.poke_card_header}>
          <h3>{details.name}</h3>
        </header>
        {/* Maneira simples para mostrar a img do pokemon. */}
        {/* <img src={details.sprites.front_default} /> */}
        {/* Dessa maneira \/, está pegando os pokes animados. Porém ele quebra a organização dos cards. */}
        <img
          src={
            details.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={details.name}
        />
        <p>N°: {details.id}</p>
      </div>
    </div>
  );
}
