import React, { useReducer, createContext, useContext } from 'react';
import Avatar from '../assets/user.png'
import { config } from "../config"
// Initial State of the Theme Reducer
const BlueTheme = {
    backgroundColor: "blue",
    color: "white"
}

const OrangeTheme = {
    backgroundColor: "orange",
    color: "white"
}

const CustomTheme = {
    backgroundColor: config.backgroundColor,
    color: config.color
}



//----------------------------
// Reducer Immutability
// update state in an immutable format using the *spread operator*
// or Object.assign
//----------------------------
const ThemeReducer = (state = {
    backgroundColor: config.backgroundColor
}, action) => {
    switch(action.type){
        case "SET_CUSTOM":
            return {...CustomTheme}
        case "SET_BLUE":
            return {...BlueTheme}
        case "SET_ORANGE":
            return {...OrangeTheme}
        default:
            return state;
    }
}

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, CustomTheme);
    
    return (
        // Some actions to not require a payload
        <ThemeContext.Provider value={{
            theme: state,
            backgroundColor: state.backgroundColor,
            setCustom: ()=> dispatch({type: "SET_CUSTOM"}),
            setBlue: () => dispatch({type: "SET_BLUE"}),
            setOrange: () => dispatch({type: "SET_ORANGE"})
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const ThemeConsumer = ThemeContext.Consumer;

//-----------------------
// Function Decomposing
// Using functional decomposition we have continue decomposing the functions until we get exactly the data we need
// NOTE- This is a good idea if you only need to utilize certain values.
//-----------------------
export const useTheme = () => useContext(ThemeContext);
