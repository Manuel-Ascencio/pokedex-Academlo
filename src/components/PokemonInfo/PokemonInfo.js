import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { colors } from "../Utils";
import { FaArrowLeft } from "react-icons/fa";

import {
  Button,
  Container,
  PokemonContainer,
  Pokemon,
  PokemonIdentifier,
  Id,
  Name,
  Measurement,
  Height,
  Weight,
  PokemonDescription,
  Text,
  Type,
  PokemonImage,
  Img,
  JapaneseName,
  Title,
  Skills,
  Progress,
  ProgressValue,
  Spinner,
} from "./PokemonInfoStyles";

const PokemonInfo = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [pokemonspecies, setPokemonspecies] = useState({});
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");

  const select = JSON.parse(localStorage.getItem("selected"));

  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const image = pokemon.sprites?.other["official-artwork"].front_default;

  useEffect(() => {
    dispatch({ type: "IS_LOADING" });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
        setAttack(Math.round(res.data.stats[1].base_stat / 1.9).toString());
        setDefense(Math.round(res.data.stats[2].base_stat / 2.5).toString());
        setSpeed(Math.round(res.data.stats[5].base_stat / 1.8).toString());
      })
      .finally(() => dispatch({ type: "IS_LOADING" }));

    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => setPokemonspecies(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const attackdeg = Math.floor(+attack * 3.6).toString();
  const defensedeg = Math.floor(+defense * 3.6).toString();
  const speeddeg = Math.floor(+speed * 3.6).toString();

  let type = select === "All pokemons" ? pokemon.types?.[0].type.name : select;

  const names = pokemonspecies.names;
  const text = pokemonspecies.flavor_text_entries;

  const language = names?.find((res) => res.language.name === "ja-Hrkt");

  const japaneseName = language?.name;

  const txt = text
    ?.find((res) => res.language.name === "en")
    .flavor_text.split("");

  txt?.map((value, i) => {
    if (i === 0) {
      txt[i] = txt[i].toUpperCase();
    } else {
      txt[i] = txt[i].toLowerCase();
    }

    if (value === "\n" || value === "\f") {
      txt[i] = " ";
    }
  });

  const description = txt ? txt?.join("") : "Not available";

  const pokemonheight = pokemon.height?.toString().split("");

  if (pokemonheight?.length === 1) {
    pokemonheight?.splice(0, 0, "0.");
  } else if (pokemonheight?.length === 2) {
    pokemonheight?.splice(1, 0, ".");
  } else {
    pokemonheight?.splice(2, 0, ".");
  }

  const height = pokemonheight?.join("").toString();

  const pokemonweight = pokemon.weight?.toString().split("");

  if (pokemonweight?.length === 1) {
    pokemonweight?.splice(0, 0, "0.");
  } else {
    pokemonweight?.splice(pokemonweight.length - 1, 0, ".");
  }

  const weight = pokemonweight?.join("").toString();

  return (
    <Pokemon colors={colors} type={type}>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <PokemonContainer>
            <Link to={"/pokedex"}>
              <Button>
                <FaArrowLeft />
              </Button>
            </Link>
            <PokemonIdentifier>
              <Id>#{pokemon.id}</Id>
              <Name>{pokemon.name}</Name>
            </PokemonIdentifier>
            <PokemonImage>
              <Img src={image} alt="image" />
              <JapaneseName>{japaneseName}</JapaneseName>
            </PokemonImage>
            <Measurement>
              <Height>Height- {height}m</Height>
              <Weight>Weight- {weight}kg</Weight>
            </Measurement>
            <Type>
              Type:
              {pokemon.types?.map((type) => (
                <span key={type.type.name}>({type.type.name})</span>
              ))}
            </Type>
            <PokemonDescription>
              <Title>Description</Title>
              <Text>{description}</Text>
            </PokemonDescription>

            <Skills>
              <Progress colors={colors} type={type} deg={attackdeg}>
                <ProgressValue colors={colors} type={type}>
                  <Title>Attack</Title>
                  {attack}%
                </ProgressValue>
              </Progress>
              <Progress colors={colors} type={type} deg={defensedeg}>
                <ProgressValue colors={colors} type={type}>
                  <Title>Defense</Title>
                  {defense}%
                </ProgressValue>
              </Progress>
              <Progress colors={colors} type={type} deg={speeddeg}>
                <ProgressValue colors={colors} type={type}>
                  <Title>Speed</Title>
                  {speed}%
                </ProgressValue>
              </Progress>
            </Skills>
          </PokemonContainer>
        )}
      </Container>
    </Pokemon>
  );
};

export default PokemonInfo;
