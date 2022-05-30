import { Container, Row, Col } from "reactstrap";
import "./Produse.css";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import Search from "../components/Search";

function Produse() {
	const [produs, setProdus] = useState(null);
	const [inputValue, setInputValue] = useState("");

	const getProdus = async () => {
		const responseData = await fetch("https://fakestoreapi.com/products");
		const apiProdus = await responseData.json();

		setProdus(apiProdus);
	};

	const onSearch = (input) => {
		setInputValue(input);
	};

	const filterByInput = (arrayProducts, searchValue) => {
		if (searchValue === null) return arrayProducts;

		return console.log(
			arrayProducts.filter(
				(elem) =>
					elem.title === "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
			)
		);

		// return elem.title.toLowerCase().includes(searchValue.toLowerCase());
	};

	useEffect(() => {
		getProdus();
	}, []);

	return (
		<Container>
			<div className='product_page'>
				<Col xs='12' md='6'>
					<div className='product_page_left'>
						<h3>Product categories</h3>
						<ul>
							<li>Accesories</li>
							<li>Fashion</li>
							<li>MEn</li>
						</ul>
					</div>
				</Col>
				<Col xs='12' md='6' className='product_page_right'>
					{/* <div className='product_page_right'> */}
					<Row className='class_search'>
						<Search handleSearch={onSearch} />
					</Row>
					{/* <div className='products_list'> */}
					<Row className='products_list'>
						{produs ? (
							<>
								{produs
									.filter((elem) =>
										elem.title.toLowerCase().includes(inputValue.toLowerCase())
									)
									.slice(0, 8)
									.map((prod, index) => {
										return <Product prod={prod} key={"prod_" + index} />;
									})}
							</>
						) : (
							<div>Loading ...</div>
						)}
					</Row>
					{/* </div> */}
					{/* </div> */}
				</Col>
			</div>
		</Container>
	);
}

export default Produse;
