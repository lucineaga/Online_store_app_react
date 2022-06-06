import Slider from "../components/Slider.js";
import { Container, Row } from "reactstrap";
import Category from "../components/Category.js";
import { useState, useEffect } from "react";
import Product from "../components/Product.js";
import "./Home.css";

function Home() {
	const [category, setCategory] = useState(null);
	const [produs1, setProdus] = useState(null);

	const getCategory = async () => {
		const responsaData = await fetch(
			"https://fakestoreapi.com/products/categories"
		);
		const apiCategory = await responsaData.json();

		setCategory(apiCategory);
	};

	const getProdus1 = async () => {
		const responseData1 = await fetch("https://fakestoreapi.com/products");
		const apiProdus1 = await responseData1.json();

		setProdus(apiProdus1);
	};

	useEffect(() => {
		getCategory();
	}, []);

	useEffect(() => {
		getProdus1();
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
				<div className='TrendingProducts'>
					<h3 className='TrendingProductTitle'>Trending Products</h3>
					<p className='TrendingProductPara'>
						The most rated products by our customers
					</p>
					<Row md='4'>
						{produs1 ? (
							<>
								{produs1.slice(0, 8).map((prod, index) => {
									return <Product prod={prod} key={"prod_" + index} />;
								})}
							</>
						) : (
							<div>Loading ...</div>
						)}
					</Row>
				</div>
			</Container>
		</>
	);
}

export default Home;
