import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const PokedexInfo = ({ url }) => {

    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemonInfo(res.data))
    }, [url])

    return (
        <div className="Poke-ball">
            <h2 className="name">{pokemonInfo.name}</h2>
            <div className="Line">
                <div className="Circle">
                    <Link to={`/pokedex/${pokemonInfo.id}`}>
                        <div className="Circle2">
                            <img src={pokemonInfo.sprites?.other.dream_world.front_default} alt="" width="80px" />
                        </div>
                    </Link>
                </div>
                <h3 className="Type">
                    {pokemonInfo.types?.map(type => <span key={type.type.name}>{type.type.name} </span>)}
                </h3>
            </div>
        </div>
    )

}

export default PokedexInfo;