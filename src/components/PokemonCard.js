import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name, hp, sprites} = pokemon
  const [sprite,setSprite] = useState(true)

  // const frontBack = () => {
  //   setSprite()
  // }

  // const frontSprite = (sprites) => {
  //   return <img alt="oh no!" src={sprites.front}/>
  // }

  // const backSprite = (sprites) => {
  //   return <img alt="oh no!" src={sprites.back}/>
  // }
const handleClick = () => {
  setSprite((sprite) => !sprite)
}

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img alt={name} src={sprite ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
