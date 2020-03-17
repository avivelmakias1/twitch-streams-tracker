import React, { useState } from "react";
import PropTypes from "prop-types";
function SearchBar({ updateQuery }) {
	const [query, setQuery] = useState("");
	const onQueryChange = e => {
		const updatedQuery = e.target.value;
		setQuery(updatedQuery);
		if (updatedQuery.length >= 3) {
			updateQuery(updatedQuery);
		}
	};
	return (
		<>
			<input value={query} onChange={onQueryChange} />
		</>
	);
}

SearchBar.propTypes = {
	updateQuery: PropTypes.func.isRequired
};

export default SearchBar;
