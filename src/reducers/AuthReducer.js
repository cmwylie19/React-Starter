import React, { useReducer, createContext, useContext } from 'react';
import Avatar from '../assets/user.png'

// Initial State of the Auth Reducer
const initialState = {
    name: 'Example User',
    avatar: Avatar
};

//----------------------------
// Reducer Immutability
// update state in an immutable format using the *spread operator*
// or Object.assign
//----------------------------
const AuthReducer = (state = {}, action) => {
    switch(action.type){
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_AVATAR":
            return {...state, avatar: action.payload}
        default:
            return state;
    }
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{
            name: state.name,
            avatar: state.avatar,
            setName: name => dispatch({type: "SET_NAME", payload: name}),
            setAvatar: avatar => dispatch({type: "SET_AVATAR", payload: avatar})
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer;

//-----------------------
// Function Decomposing
// Using functional decomposition we have continue decomposing the functions until we get exactly the data we need
// NOTE- This is a good idea if you only need to utilize certain values.
//-----------------------
export const useAuth = () => useContext(AuthContext);

export const useName = () => {
    const { name } = useName();
    return name;
}

export const useAvatar = () => {
    const { name } = useName();
    return name;
}