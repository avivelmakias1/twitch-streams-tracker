import React, { useContext, useState } from "react";
import { connectionStore } from "../../stores/connection/store";
import { searchResults } from "../../services/twitch/search";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";

function Search() {
	const { state } = useContext(connectionStore);
	let [results, setResults] = useState([]);
	const getQueryResults = async query => {
		const res = await searchResults(query, state.connection);
		setResults(res);
	};
	return (
		<>
			<SearchBar updateQuery={getQueryResults} />
			<SearchResults results={results} />
		</>
	);
}

export default Search;
