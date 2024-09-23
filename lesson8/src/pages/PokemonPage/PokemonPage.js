import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Pagination from "../../components/Pagination/Pagination"
import classes from './PokemonPage.module.css';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemo/?limit';
    const limit = 12
    const {offset,setOffset} = useState(0);
    const page = Math.floor(offset / limit) + 1
    const handlePrev = () => {
        if (offset > 0) return;
        setOffset(prev => prevState - limit);

    }
    const handleNext = () => {
        return setOffset(next  => prevState + limit);
    }



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
    }, [offset]);

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Pokemon</h1>
        <hr className={classes.hr}/>
        <ul className={classes.pokemonList}>
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </ul>
            <Pagination next={handleNext} prev={handlePrev} page={page}/>
        </div>

    );
};

export default PokemonList;
