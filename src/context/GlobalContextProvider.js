import React from "react"

import {MAPPING} from '../data/images';

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    currentStep: 1,
};

function reducer(state, action) {
    console.log(action);
  switch (action.type) {
    case 'add':
        const id = MAPPING[action.payload];
      return {
        ...state,
        [id]: state[id] + 1
      };
    case 'next':
        return {
            ...state,
            currentStep: state.currentStep + 1
        }
  }
} 

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider