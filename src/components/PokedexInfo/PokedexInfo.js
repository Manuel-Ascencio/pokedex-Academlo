import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PokeBall,
  Wrapper,
  Name,
  NameLetter,
  TypeLetter,
  Line,
  Circle,
  Pokemon,
  Image,
  Type,
} from "./PokedexInfoStyles";

const PokedexInfo = ({ url }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  const select = JSON.parse(localStorage.getItem("selected"));

  useEffect(() => {
    axios.get(url).then((res) => setPokemonInfo(res.data));
  }, [url]);

  const pokemoname =
    pokemonInfo.name?.length > 10
      ? pokemonInfo.name?.substring(0, 10)
      : pokemonInfo.name;

  const length = pokemoname?.length;
  const deg = 180 / length;

  const length2 =
    select === "All pokemons"
      ? pokemonInfo.types?.[0].type.name.length
      : select.length;
  const deg2 = 180 / length2;

  const image = pokemonInfo.sprites?.other.dream_world.front_default;
  const image2 = pokemonInfo.sprites?.other["official-artwork"].front_default;
  const image3 = pokemonInfo.sprites?.front_default;

  return (
    <PokeBall>
      <Wrapper>
        {pokemoname?.split("").map((letter, i) => (
          <Name length={length} key={i} deg={deg} i={i}>
            <NameLetter length={length} deg={deg} i={i}>
              {letter}
            </NameLetter>
          </Name>
        ))}
        <Line>
          <Circle>
            <Link to={`/pokedex/${pokemonInfo.id}`}>
              <Pokemon>
                {}
                <Image
                  image={image}
                  image2={image2}
                  src={image ? image : image2 ? image2 : image3}
                  alt="pokemon"
                />
              </Pokemon>
            </Link>
          </Circle>
          {select === "All pokemons"
            ? pokemonInfo.types?.[0].type.name?.split("").map((letter, i) => (
                <Type key={i} deg2={deg2} i={i} length={length2}>
                  <TypeLetter deg2={deg2} i={i} length={length2}>
                    {letter}
                  </TypeLetter>
                </Type>
              ))
            : select.split("").map((letter, i) => (
                <Type key={i} deg2={deg2} i={i} length={length2}>
                  <TypeLetter deg2={deg2} i={i} length={length2}>
                    {letter}
                  </TypeLetter>
                </Type>
              ))}
        </Line>
      </Wrapper>
    </PokeBall>
  );
};

export default PokedexInfo;
