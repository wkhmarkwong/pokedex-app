import axios from "axios";
import { useState } from "react";

const PokemonThumb = ({ p }) => {
  //id, type, photo
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [photo, setPhoto] = useState();

  async function getData() {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${p}`);
    setId(data.data.id);
    setType(data.data.types[0].type.name);
    setPhoto(data.data.sprites.other.dream_world.front_default);
    // console.log(id);
    // console.log(type);
    // console.log(photo);
  }
  getData();

  const style = type + " thumb-container";

  return (
    <div className={style}>
      <img src={photo} alt={p} />
      <h3>{p}</h3>
      <p>#{id}</p>
      <small>Type: {type}</small>
    </div>
  );
};

export default PokemonThumb;
