import React, {createContext,useEffect,useState,} from 'react'
import axios from 'axios';

const GlobalContext = createContext()

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=dc9113a953b24a770da77b545ac12ef3&language=us&query=${inputValue}&page=1&include_adult=false&region=US`;
    axios.get(apiUrl)
        .then((resp) => {
            const allData = resp.data;
            setSearchResults(allData);
            console.log(allData);
            setInputValue('');
        })
  }, [inputValue]);
  return {
    inputValue,
    setInputValue,
    searchResults,
    setSearchResults
}
}

function GlobalProvider(props) {
  return <GlobalContext.Provider  {...props}  />}


export {GlobalProvider, Search}
