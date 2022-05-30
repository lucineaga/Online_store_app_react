import { useState } from "react";

function Search({ handleSearch }) {
	const [inputSearch, setInputSearch] = useState("");

	const handleTrack = () => {
		if (inputSearch.length !== 0) {
			handleSearch(inputSearch);
		} else {
			setInputSearch("");
			handleSearch(inputSearch);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleTrack();
		}
	};
	return (
		<>
			<input
				style={{ height: "30px", width: "300px", order: -1 }}
				value={inputSearch}
				onChange={(e) => {
					setInputSearch(e.target.value);
				}}
				onKeyPress={handleKeyPress}
				type='text'
				placeholder='Search...'
			/>

			<button
				style={{ height: "30px", width: "80px" }}
				onClick={() => {
					handleSearch(inputSearch);
				}}>
				Search
			</button>
		</>
	);
}

export default Search;
