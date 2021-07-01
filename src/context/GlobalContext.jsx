import React, {createContext, useEffect, useState,useReducer,useContext} from 'react'
import axios from 'axios';

const GlobalContext = createContext()

function globalReducer(state, action) {

    switch (action.type) {

        case 'update':
            return [
                state.action.payload
                ]

        default:
            return state
    }
}


function GlobalProvider(props) {
    const [state, dispatch] = useReducer(globalReducer,[])
    return <GlobalContext.Provider  {...props}  />
}
function useGlobalSearch() {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('useGlobalSearch must be used with a GlobalProvider')
    }

    const [state, dispatch] = context
    const [inputValue, setInputValue] = useState("" );
    const [searchResults, setSearchResults] = useState([]);
    const update = (state) => dispatch({type: 'update', payload: state})

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=dc9113a953b24a770da77b545ac12ef3&language=us&query=${inputValue}&page=1&include_adult=false&region=US`;
        axios.get(apiUrl)
            .then((resp) => {
                const allData = resp.data;
                setSearchResults(allData);
                console.log(searchResults);
            })
    }, [inputValue]);
    return {
        state,
        update,
        inputValue,
        setInputValue,
        searchResults,
        setSearchResults
    }
}


export {GlobalProvider, useGlobalSearch}
