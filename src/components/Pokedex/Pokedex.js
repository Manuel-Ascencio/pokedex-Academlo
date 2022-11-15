import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

import PokedexInfo from "../PokedexInfo/PokedexInfo";
import pokemon from "../../images/img-pokemon.png";
import {
  PokedexContainer,
  Text,
  Search,
  SearchContent,
  Image,
  Form,
  Input,
  BtnSearch,
  SelectButton,
  PokemonSection,
  Pages,
  Previous,
  Next,
  Items,
  ButtonContainer,
  PageButton,
  Spinner,
} from "./PokedexStyles";

const Pokedex = () => {
  const name = useSelector((state) => state.userName);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  const [pokedex, setPokedex] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState("");
  const [page, setPage] = useState(1);
  const [buttonpage, setButtonpage] = useState(1);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("All pokemons");

  const pages = [];
  const navigate = useNavigate();

  if (localStorage.getItem("selected") === null) {
    localStorage.setItem("selected", JSON.stringify("All pokemons"));
  }

  useEffect(() => {
    let isMounted = false;
    const select = JSON.parse(localStorage.getItem("selected"));

    if (select === "All pokemons") {
      dispatch({ type: "IS_LOADING" });
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
        .then((res) => {
          if (!isMounted) setPokedex(res?.data?.results);
        })
        .finally(() => dispatch({ type: "IS_LOADING" }));
      setButtonpage(1);
      return () => {
        isMounted = true;
      };
    } else {
      dispatch({ type: "IS_LOADING" });
      axios
        .get(`https://pokeapi.co/api/v2/type/${select}`)
        .then((res) => {
          if (!isMounted) setPokedex(res.data?.pokemon);
        })
        .finally(() => dispatch({ type: "IS_LOADING" }));
      return () => {
        isMounted = true;
      };
    }
  }, []);

  useEffect(() => {
    let isMounted = false;
    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      if (!isMounted)
        setTypes([
          "All pokemons",
          ...res.data?.results.map((type) => type.name),
        ]);
    });
    return () => {
      isMounted = true;
    };
  }, []);

  const filter = async (value) => {
    if (value === "All pokemons") {
      let isMounted = false;
      dispatch({ type: "IS_LOADING" });
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
        .then((res) => {
          if (!isMounted) setPokedex(res.data?.results);
        })
        .finally(() => dispatch({ type: "IS_LOADING" }));
      return () => {
        isMounted = true;
      };
    } else {
      let isMounted = false;
      dispatch({ type: "IS_LOADING" });
      await axios
        .get(`https://pokeapi.co/api/v2/type/${value}`)
        .then((res) => {
          if (!isMounted) setPokedex(res.data?.pokemon);
        })
        .finally(() => dispatch({ type: "IS_LOADING" }));
      setPage(1);
      setButtonpage(1);
      return () => {
        isMounted = true;
      };
    }
  };

  const search = (e) => {
    e.preventDefault();
    navigate(`${pokemonSelected}`);
  };

  const handlechange = (name) => {
    const type = types.find((type) => type === name);
    localStorage.setItem("selected", JSON.stringify(type));
    filter(type);
    setType(type);
    dispatch({ type: "SET_POKEMON_TYPE", payload: type });
  };

  const pokemonPerPage = 16;
  const lastIndex = page * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;
  const pagination = pokedex.slice(firstIndex, lastIndex);
  const pageLengh = Math.ceil(pokedex.length / pokemonPerPage);

  for (let i = 1; i < pageLengh + 1; i++) {
    pages.push(i);
  }

  const buttonPerPage = 9;
  const lastButton = buttonpage * buttonPerPage;
  const firstButton = lastButton - buttonPerPage;
  const buttonPagination = pages.slice(firstButton, lastButton);

  useEffect(() => {
    let isMounted = false;
    if (buttonpage >= 1) {
      if (!isMounted) setPage(buttonPagination[0]);
    }
    return () => {
      isMounted = true;
    };
  }, [buttonpage, pokedex]);

  const select = JSON.parse(localStorage.getItem("selected"));

  return (
    <PokedexContainer>
      <Search>
        <SearchContent>
          <Image src={pokemon} />
          <Form onSubmit={search}>
            <BtnSearch onClick={search}>
              <i className="fas fa-search"></i>
            </BtnSearch>
            <Input
              type="text"
              value={pokemonSelected}
              onChange={(e) => setPokemonSelected(e.target.value.toLowerCase())}
              placeholder="Search pokemon..."
            />
          </Form>
          <SelectButton
            value={select}
            onChange={(e) => handlechange(e.target.value)}
          >
            {types.map((type, id) => (
              <option key={id} value={type}>
                {type}
              </option>
            ))}
          </SelectButton>
        </SearchContent>
      </Search>
      <Text>
        &#128075;Welcome {name}, click on your favorite pokemon and discover its
        abilities.
      </Text>
      <PokemonSection>
        <Pages>
          <ButtonContainer>
            {buttonpage * buttonPerPage !== buttonPerPage && (
              <Previous onClick={() => setButtonpage(buttonpage - 1)}>
                <BiChevronsLeft />
              </Previous>
            )}

            {buttonPagination.map((pag, i) => (
              <PageButton
                key={i}
                onClick={() => setPage(pag)}
                pag={pag}
                page={page}
              >
                {pag}
              </PageButton>
            ))}
            {buttonpage * buttonPerPage < pages.length && (
              <Next onClick={() => setButtonpage(buttonpage + 1)}>
                <BiChevronsRight />
              </Next>
            )}
          </ButtonContainer>
        </Pages>
        <Items>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {pagination?.map((pokemon, i) => (
                <li key={i}>
                  <PokedexInfo
                    url={pokemon?.url ? pokemon?.url : pokemon?.pokemon.url}
                  />
                </li>
              ))}
            </>
          )}
        </Items>

        <Pages>
          <ButtonContainer>
            {buttonpage * buttonPerPage !== buttonPerPage && (
              <Previous onClick={() => setButtonpage(buttonpage - 1)}>
                <BiChevronsLeft />
              </Previous>
            )}
            {buttonPagination.map((pag, i) => (
              <PageButton
                key={i}
                onClick={() => setPage(pag)}
                pag={pag}
                page={page}
              >
                {pag}
              </PageButton>
            ))}
            {buttonpage * buttonPerPage < pages.length && (
              <Next onClick={() => setButtonpage(buttonpage + 1)}>
                <BiChevronsRight />
              </Next>
            )}
          </ButtonContainer>
        </Pages>
      </PokemonSection>
    </PokedexContainer>
  );
};

export default Pokedex;
