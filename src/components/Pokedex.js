import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokedexInfo from "./PokedexInfo"

const Pokedex = () => {

    const name = useSelector(state => state.name);

    const [pokedex, setPokedex] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState("");
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=801")
            .then(res => setPokedex(res?.data?.results))

    }, []);

    const search = () => navigate(`${pokemonSelected}`);

    const pokemonPerPage = 16;

    const lastIndex = page * pokemonPerPage;

    const firstIndex = lastIndex - pokemonPerPage;


    const pagination = pokedex.slice(firstIndex, lastIndex);

    const pageLengh = Math.ceil(pokedex.length / pokemonPerPage);



    return (
        <section>
            <h2 className="Header-pokedex">Pokedex</h2>
            <h3>Welcome {name}, click on your favorite pokemon and discover its abilities</h3>
            <div className="Img-search"></div>
            <div className="Search">
                <input
                    type="text"
                    value={pokemonSelected}
                    onChange={e => setPokemonSelected(e.target.value)}
                />
                <button onClick={search} className="Btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="Pages">
                {
                    page !== 1 && <button onClick={() => setPage(page - 1)}><i className="fas fa-arrow-circle-left"></i></button>
                }
                {page} / {pageLengh}
                {
                    page !== pageLengh && <button onClick={() => setPage(page + 1)}><i className="fas fa-arrow-circle-right"></i></button>
                }
            </div>
            <ul>
                {
                    pagination?.map(pokemon => (
                        <li key={pokemon.name}>
                            <PokedexInfo url={pokemon?.url} />
                        </li>
                    ))
                }
            </ul>
            <div className="Pages">
                {
                    page !== 1 && <button onClick={() => setPage(page - 1)}><i className="fas fa-arrow-circle-left"></i></button>
                }
                {page} / {pageLengh}
                {
                    page !== pageLengh && <button onClick={() => setPage(page + 1)}><i className="fas fa-arrow-circle-right"></i></button>
                }
            </div>
        </section>
    )
}

export default Pokedex;