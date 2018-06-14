const initialState = {
  bees: [
    {
      id: 0,
      happy: true,
      speed: 350,
      x: 0,
      color: 'red',
      y: 0,
      timer: 0
    },
    {
      id: 1,
      happy: false,
      speed: 350,
      x: 100,
      color: 'green',
      y: 100,
      timer: 0
    }
  ]
};

const defaultBee = {
  id: 0,
  happy: true,
  speed: 10,
  x: 0,
  color: 'red',
  y: 0,
  timer: 0
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'ADD_NEW_BEE':
      const lastId = action.payload.lastId;
      const newBee = { ...defaultBee, id: lastId };
      return {
        ...state,
        bees: [...state.bees, newBee]
      };
      break;
    case 'CHANGE_BEE_POSITION':
      const beesWithNewPosition = state.bees.map(bee => {
        if (action.payload.beeId === bee.id) {
          bee.x = action.payload.position.x;
          bee.y = action.payload.position.y;
          bee.timer = 0;
        }
        return bee;
      });
      return {
        ...state,
        bees: beesWithNewPosition
      };
    case 'CHANGE_BEE_MOOD':
      const beesWithNewMood = state.bees.map(bee => {
        if (action.payload.bee.id === bee.id) {
          bee.happy = !bee.happy;
          bee.timer = 0;
        }
        return bee;
      });
      return {
        ...state,
        bees: beesWithNewMood
      };
    case 'CHANGE_BEE_TIMER':
      const beesWithNewTimer = state.bees.map(bee => {
        if (action.payload.bee.id === bee.id) {
          bee.timer += 1;
        }
        return bee;
      });
      return {
        ...state,
        bees: beesWithNewTimer
      };
    default:
      return state;
  }
};
