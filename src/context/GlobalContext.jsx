import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';
import {DataType} from "../constants/DataTypes";
import useLocalStorage from "../hooks/useLocalStorage";


export const GlobalContext = createContext()
export const GlobalProvider = ({children}) => {
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState('All');
    const [filterData, setFilterData] = useState({})
    const [load, setLoad] = useState(false)
    const [name, setName] = useLocalStorage("searchRequest", "")
    const filtered = (type, type_title) => {
        let filtered_data = searchResults?.results?.filter(item => type === item.media_type)
        return {
            [type_title]: filtered_data
        }
    }
    useEffect(() => {
        const fetchData = (() => {
            const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=dc9113a953b24a770da77b545ac12ef3&language=us&query=${inputValue}&page=1&include_adult=false&region=US`;
            setLoad(false)
            axios.get(apiUrl)
                .then((resp) => {
                    const allData = resp.data;
                    setSearchResults(allData);
                })
                .catch(error => {
                    console.log(error.response)
                })
        });
        const timer = setTimeout(() => {
            fetchData();
        }, 300);
        return () => {
            setLoad(true)
            clearTimeout(timer)
        };
    }, [inputValue]);
    useEffect(() => {
            const result = DataType.map(item => filtered(item.type, item.type_title))
            setFilterData({...filterData, result})
        }
        , [searchResults])

    return (<GlobalContext.Provider
            value={{
                setInputValue,
                inputValue,
                searchResults,
                setSearchResults,
                searchType,
                setSearchType,
                filterData,
                setFilterData,
                load,
                filtered,
                name,
                setName
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}







