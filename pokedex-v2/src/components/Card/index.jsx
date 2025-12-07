import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Buttons, Button } from "./styles";

function CardHome(props) {
  const [frontImage, setImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const url = props.url;

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        setImage(
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
        setBackImage(
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .back_default
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  return (
    <>
      <Card>
        <div>
          {frontImage && <img src={frontImage} alt={props.name} />}
          {backImage && <img src={backImage} alt={props.name} />}
        </div>

        <h2>{props.name} </h2>
        <span>{props.id}</span>
        <Buttons>
          <Button onClick={props.add}>Adicionar</Button>
          <Button onClick={props.det}>Ver detalhes</Button>
        </Buttons>
      </Card>
    </>
  );
}
export default CardHome;
