import { useState, useEffect } from 'react';
import {Pokemon} from "../Pokemon/Pokemon"
import axios from 'axios';

const List = () => {

  const [pokemones, setPokemones] = useState([]);
  const [resultados, setResultados] = useState([]);

  
  useEffect(()=> {
    axios.get(`https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json`)
      .then(response => {
        //La llamada es correcta
        const pokeData = response.data;
        //pokemones = pokeData; ESTO ESTA MAL HECHO
        setPokemones(pokeData);
        setResultados(pokeData);
        //console.log(pokemones);
      })
      .catch(error => {
        //Hubo un errrrrror
        console.log(error);
      })
  },[]);

  const buscar = (event) =>{
    let q = event.currentTarget.value;
    
    let resultado = pokemones.filter((pokemon)=>{
      return pokemon.name.toLowerCase().includes(q.toLowerCase());
    });

    setResultados(resultado);
    
  }

  const fuego = (event) =>{
    let resultado = pokemones.filter((pokemon)=>{
      return pokemon.type.includes("fire");
    });

    setResultados(resultado);
  }

  return (
    <div className="App container">
      <input type="text" id="valor" placeholder="Ingresa un nombre" onChange={buscar}/>
      <button className="button" onClick={fuego}>Fuego!</button>

      {
        resultados.map(pokemon =>{
          return <Pokemon key={pokemon.id} number={pokemon.number} id={pokemon.id} src={pokemon.ThumbnailImage} name={pokemon.name}></Pokemon>
          //return (<li key={pokemon.number}><img src={pokemon.ThumbnailImage}/> {pokemon.name}</li>)
        })
      }
    </div>
  )
}

export {List};
