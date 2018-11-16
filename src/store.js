import { createStore } from 'redux';

const defaultState = {
  lines: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_LINE':
      return {
        lines: [
          ...state.lines,
          action.payload
        ]
      };
    case 'CLEAR_LINES':
      return {
        lines: []
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export const addLine = (content, type) => {
  store.dispatch({ type: 'ADD_LINE', payload: { content, type } });
}

export const clearLines = () => {
  store.dispatch({ type: 'CLEAR_LINES'});
}

export default store;
