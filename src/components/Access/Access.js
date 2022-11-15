import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  PokemonLogo,
  Form,
  Label,
  Login,
  LoginIcon,
  Input,
  Button,
} from "./AccessStyles";
import imgPokemon from "../../images/img-pokemon.png";
import pokemonTrainer from "../../images/pokemon-trainer.png";

const Acces = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "GET_NAME", payload: name });
    navigate("/pokedex");
  };

  return (
    <HomeContainer>
      <PokemonLogo src={imgPokemon} />
      <Form onSubmit={submit}>
        <Label>
          <Login>
            <LoginIcon src={pokemonTrainer} />
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              required
            />
          </Login>
        </Label>
        <Button>Start</Button>
      </Form>
    </HomeContainer>
  );
};

export default Acces;
