import React, {createContext,useEffect} from 'react'

const GlobalContext = createContext()

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = fetchApiData(inputValue);
    setSearchResults(filteredResults);
  }, [inputValue]);
}

function GlobalProvider(props) {
  return <GlobalContext.Provider  {...props}   value={{
    results: searchResults,
    setInputValue: setInputValue,
  }} />
}
// function useGlobalContext() {
//   const context = useContext(GlobalContext)
//   if (!context) {
//       throw new Error('useGlobalContext must be used with a GlobalProvider')
//   }
//   return {
//       state,
//       add,
//       remove
//   }
// }


export default{GlobalProvider}
