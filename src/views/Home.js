import React from "react";
import SearchInput from "../components/Search/SearchInput";
import GridRow from "./utils/GridRow";
import ResultFilter from "./ResultFilter";

export default function Home() {
    return (
        <>
            <GridRow justify={"center"}>
                <SearchInput/>
            </GridRow>
            <ResultFilter/>
        </>
    );
}
