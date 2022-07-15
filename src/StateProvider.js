import React, {createContext, useContext, useReducer} from "react";

//prepair the data
export const StateContext = createContext();

//wrap our app and provide the data
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//pull information from layout
export const useStateValue = () => useContext(StateContext)
