import { useEffect, useState } from "react";
import axios from "axios"


const PokemonCard =({pokemon}) => {
    const[image,setImage] = useState ("")
    useEffect(() => {
        axios.get(pokemon.url).then((data) => {
            setImage(data.data.sptrites.other.dream_world.front_default)
        })
    },[pokemon.url])
    return (
        <div className="pokemonCard">
            {pokemon.name}
            <img src="{image}"
            alt="pokemon"/>
           
        </div>
    )
}