import { useState } from "react";

function Search({ handleSearch }) {
	const [inputSearch, setInputSearch] = useState("");

	return (
		<>
			<div className='container_search'>
				<input
					value={inputSearch}
					onChange={(e) => {
						setInputSearch(e.target.value);
					}}
					type='text'
					placeholder='Search'
				/>

				<button
					onClick={() => {
						handleSearch(inputSearch);
					}}>
					Search
				</button>
			</div>
		</>
	);
}

export default Search;
