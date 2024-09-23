import React, { useEffect, useState } from 'react';
import classes from './PokemonCard.module.css';

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState({});
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemon = async (name) => {
        try {
            const response = await fetch(`${BASE_URL}${name}`);
            const data = await response.json();
            setPokemonData(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        if (pokemon?.name) {
            getPokemon(pokemon.name);
        }
    }, [pokemon]);

    return (
        <li className={classes.card}>
            <div className={classes.info}>
                <img className={classes.img}
                     src={pokemonData?.sprites?.other?.dream_world?.front_default}
                     alt={pokemon.name} />
                <p className={classes.title}>{pokemon.name}</p>
            </div>

            <button className={classes.btn} onClick={() => console.log(`Подробнее о ${pokemon.name}`)}>
                <p className={classes.btn_title}>подробнее</p>
            </button>
        </li>
    );
};

export default PokemonCard;
