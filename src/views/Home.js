import Slider from "../components/Slider.js";
import { Container, Row } from "reactstrap";
import Category from "../components/Category.js";
import { useState, useEffect } from "react";

function Home() {
	const [category, setCategory] = useState(null);

	const getCategory = async () => {
		const responsaData = await fetch(
			"https://fakestoreapi.com/products/categories"
		);
		const apiCategory = await responsaData.json();
		console.log(apiCategory);
		setCategory(apiCategory);
	};

	useEffect(() => {
		getCategory();
	}, []);
	return (
		<>
			<Container>
				<Row>
					<Slider />
				</Row>

				<Row>
					{category ? (
						<>
							{category.slice(0, 3).map((cat, index) => {
								return <Category cat={cat} key={"cat_" + index} />;
							})}
						</>
					) : (
						<div> Loading...</div>
					)}
				</Row>
			</Container>
		</>
	);
}

export default Home;
