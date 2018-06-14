export const changeBeeMood = bee => dispatch => {
  dispatch({
    type: 'CHANGE_BEE_MOOD',
    payload: {
      bee
    }
  });
};

export const addNewBee = lastId => dispatch => {
  dispatch({
    type: 'ADD_NEW_BEE',
    payload: {
      lastId
    }
  });
};

export const changeBeeTimer = bee => dispatch => {
  dispatch({
    type: 'CHANGE_BEE_TIMER',
    payload: {
      bee
    }
  });
};

export const changeBeePosition = data => dispatch => {
  dispatch({
    type: 'CHANGE_BEE_POSITION',
    payload: {
      beeId: data.bee.id,
      position: data.position
    }
  });
};
