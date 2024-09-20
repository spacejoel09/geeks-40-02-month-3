import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import classes from './PokemonPage.module.css';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=12';
    const fetchPokemonList = async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setPokemonList(data.results);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchPokemonList();
    }, []);

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Pokemon</h1>
        <hr className={classes.hr}/>
        <ul className={classes.pokemonList}>
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </ul>
        </div>

    );
};

export default PokemonList;
