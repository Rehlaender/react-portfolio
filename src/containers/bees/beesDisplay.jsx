import React from 'react'
import { Bee } from '../../components/Bee';

export const beesDisplay = ({
  //states
  bees,
  lastId,
  //actions
  addNewBee,
  changeBeeMood,
  changeBeeTimer,
  changeBeePosition,
  }) => (
    <div className="beesContainer">
        <header>
          <h1 style={{ textAlign: 'center' }}>
            bees
          </h1>
          <p>just a bee dispatcher</p>
          <button onClick={() => {addNewBee(lastId); console.log('asdf')}}>dispatch a bee</button>
        </header>
        <div className="bees">
        {
          bees.map((bee, i) => {
            return (
              <Bee
                changeBeePosition={changeBeePosition}
                changeBeeMood={changeBeeMood}
                changeBeeTimer={changeBeeTimer}
                bee={bee} key={i}/>
            )
          })
        }
        {JSON.stringify(bees)}
        </div>
    </div>
);
