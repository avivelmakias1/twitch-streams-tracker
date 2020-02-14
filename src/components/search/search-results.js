import React from "react";
import "./search.css";

function SearchResults({ results }) {
	return (
		<div>
			{results.map(res => {
				return (
					<div className={"streamer"} key={res._data._id}>
						<img
							src={res._data.channel.logo}
							alt={"streamer icon"}
							className={"streamer-icon"}
						/>
						<div className={"streamer-wrapper"}>
							<span className={"streamer-name"}>
								{res._data.channel.display_name}
							</span>
							<span className={"game"}>{res._data.game}</span>
						</div>
						<div className={res._data.stream_type && ""}></div>
					</div>
				);
			})}
		</div>
	);
}

export default SearchResults;
