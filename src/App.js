import React, { PureComponent } from "react";

import { GameEngine } from "react-game-engine";
import { MoveBox } from "./systems"
import Entities from "./entities";


export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[MoveBox]} // an array of fx called per tick
        entities={Entities}  // object of initial entities, or Promise returning such
      >
        {/* className='...' // classes for the root container */}
        {/* children={} // components rendered after the entities */}
        {/* renderer={} */}
        {/* timer={} */}
        {/* running={true/false} */}
        {/* onEvent={} // callback notified when events are dispatched */}
      </GameEngine>
    );
  }
}