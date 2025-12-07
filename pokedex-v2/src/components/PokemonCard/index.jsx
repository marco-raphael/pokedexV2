import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Buttons } from "./styles";

function PokemonCard(props) {
  const [images, setImages] = useState("");
  const url = props.url;

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        setImages(
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
      })
      .catch((err) => {
        alert("Erro!", err.message);
      });
  }, [url]);

  return (
    <Card>
      <img src={images} alt={props.name} />
      <h2>{props.name} </h2>
      <span>{props.id}</span>
      <Buttons>
        <button onClick={props.del}>Deletar</button>
        <button onClick={props.det}>Ver detalhes</button>
      </Buttons>
    </Card>
  );
}
export default PokemonCard;
