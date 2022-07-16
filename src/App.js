//import logo from './logo.svg';
import './App.css';
import Caro from './components/Caro';
//import NavBar from './components/NavBar';
import { useState } from 'react';
import Axios from 'axios';
function App() {
// Here we have connected the API to the website
    const[pokemonName, setPokemonName] = useState("");
    const [pokemonChosen,setPokemonChosen] = useState(false);
    const[pokemon,setPokemon] = useState
    ({
      name:"",
      species: "",
      img: "",
      hp: "",
      attack: "",
      defense: "",
      type: "",
      
    })

    const searchPokemon = () =>{
          Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
            console.log(response);
            setPokemon({
              name:pokemonName,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              attack: response.data.stats[1].base_stat,
              defense: response.data.stats[2].base_stat,
              type: response.data.types[0].type.name,
              
            
            })

          });
            setPokemonChosen(true);
    };


    return (
        <>
          <h1 className='tophead'>POKEMON WIKIPEDIA  &#8608; YOUR SIMPLE AND EASY POKEMON DICTONARY</h1>
          
          
          
          
          <div>
            <input className='ip' type="text" 
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}/>
            <button className='searchbtn' onClick={searchPokemon}>SEARCH YOUR PET</button>
          </div>
          <div>
            <div className="DisplaySection">
              {!pokemonChosen ?(
                <h1>Please choose a pokemon</h1>
              ) : ( 
                  <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.img} alt=""/>
                    
                    <h3> species: {pokemon.species}</h3>
                    <h4> Type: {pokemon.type}</h4>
                    <h4>HP: {pokemon.hp}</h4>
                    <h4>Defense: {pokemon.defense} </h4>
                    <h4>Attack: {pokemon.attack} </h4>
                    
                  </>
                  )}
            </div>
          </div>
        <div>
        <Caro/>
          </div>  
        </>

        
    );
}

export default App;