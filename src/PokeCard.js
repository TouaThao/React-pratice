import React, {Component} from 'react'
import './PokeCard.css'

const pokemon_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const newPokemon_API='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png'

class PokeCard extends Component{
    render(){
        let imgSrc = `${pokemon_API}${this.props.id}.png`;
        return(
            <div className="PokeCard">
              <h1 className="PokeCard-Title">{this.props.name}</h1>
              <img src={imgSrc} alt={this.props.name}/>
              <div className="PokeCard-Data">Type:{this.props.type}</div>
              <div className="PokeCard-Data">Exp:{this.props.exp}</div>
            </div>
            
            
        )
    }
}

export default PokeCard;