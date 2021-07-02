import React, {useEffect, useState} from "react";
import BlockContent from "./BlockContent";
import SearchInput from "../components/Search/SearchInput";
import GridRow from "./utils/GridRow";
import SearchResultFilter from "../components/Search/SearcResultFilter";
import {useGlobalSearch} from "../context/GlobalContext";

export default function Home() {
    const {searchResults,state} = useGlobalSearch();
    useEffect(() => {

    },[searchResults])
    const data = state[0]?.results;
    console.log(data)
    const [resultData, setResultData] = useState([]);
    return (
        <>
            <GridRow justify={"center"}>
                <SearchInput/>
            </GridRow>
            <SearchResultFilter data={data} setResultData={setResultData}/>
            <BlockContent data={resultData}/>
        </>
    );
}
