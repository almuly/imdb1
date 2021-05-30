import React, {useState} from "react";
import BlockContent from "./BlockContent";
import SearchInput from "../components/Search/SearchInput";
import GridRow from "./utils/GridRow";
import SearchResultFilter from "../components/Search/SearcResultFilter";
import mockData from "../views/utils/MockData"

const data = mockData[0].results;

export default function Home() {
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
