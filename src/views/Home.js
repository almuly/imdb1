import React, {useState} from "react";
import BlockContent from "./BlockContent";
import SearchInput from "../components/Search/SearchInput";
import GridRow from "./utils/GridRow";
import SearchResultFilter from "../components/Search/SearcResultFilter";
import { Search } from "../context/GlobalContext";

export default function Home() {
  const {searchResults} = Search();
  const data = searchResults[0]?.results;
  console.log(searchResults[0])
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
