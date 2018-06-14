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
    <div className="beesContainer" style={{overFlow:'hidden'}}>
        <header>
          <h1 style={{ textAlign: 'center' }}>
            bees
          </h1>
          <h2>just a bee dispatcher</h2>
          <p><em>click on them to toggle their mood</em></p>
          <button onClick={() => {addNewBee(lastId);}}>dispatch a bee</button>
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
