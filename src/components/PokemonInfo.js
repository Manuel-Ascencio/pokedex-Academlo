import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonInfo = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])

    let type = pokemon.types?.[0].type.name;

    let color = "";

    switch (type) {
        case "grass":
            color = "#007d70"
            break;
        case "fire":
            color = "#ff4040";
            break;
        case "water":
            color = "#0082c1"
            break;
        case "bug":
            color = "#49b675"
            break;
        case "norma":
            color = "#275a83"
            break;
        case "poison":
            color = "#683475"
            break;
        case "electric":
            color = "#ffdf00"
            break;
        case "ground":
            color = "#947547"
            break;
        case "fairy":
            color = "#e83593"
            break;
        case "fighting":
            color = "#cc3300"
            break;
        case "psychic":
            color = "#331343"
            break;
        default:
            color = "#d3d3d3"
    }

    return (
        <div className="Pokemon-info" style={{ background: color }}>
            <div className="Entry">
                <h2>#{pokemon.id}</h2>
                <h1>{pokemon.name}</h1>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>
            <div className="Conteiner-center">
                <h3>
                    Type:
                    {pokemon.types?.map(type =>
                    <span key={type.type.name}>({type.type.name})</span>
                )}
                </h3>
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" className="Img-pokemon" />
            </div>
            <div className="Base-stats">
                <h2>Base stats</h2>
                <div className="Stats-list">
                    <ol>
                        {pokemon.stats?.map(stat =>
                            <li key={stat.stat.name}>
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        )}
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default PokemonInfo;