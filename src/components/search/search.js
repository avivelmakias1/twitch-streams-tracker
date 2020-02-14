import React, { useContext, useState } from "react";
import { store } from "../../store/store";
import { searchResults } from "../../services/twitch/search";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";

function Search() {
	const { state } = useContext(store);
	let [results, setResults] = useState([]);
	const getQueryResults = query => {
		searchResults(query, state.connection).then(res => setResults(res));
	};
	return (
		<>
			<SearchBar updateQuery={getQueryResults} />
			<SearchResults results={results} />
		</>
	);
}

export default Search;
