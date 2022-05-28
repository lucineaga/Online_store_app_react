import { Container, Row, Col } from "reactstrap";
import "./Produse.css";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import Search from "../components/Search";

function Produse() {
	const [produs, setProdus] = useState(null);
	const [inputValue, setInputValue] = useState(null);

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

		const filteredComp = arrayProducts.filter(
			(elem) =>
				elem.title === "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
		);
		return filteredComp;
		console.log(filteredComp);
		console.log("dupa filtrare", arrayProducts);

		// return elem.title.toLowerCase().includes(searchValue.toLowerCase());
	};

	useEffect(() => {
		getProdus();
	}, []);

	return (
		<div className='product_page'>
			<div className='product_page_left'>
				<ul>
					<li>Accesories</li>
					<li>Fashion</li>
					<li>MEn</li>
				</ul>
			</div>

			<div className='product_page_right'>
				<Search handleSearch={onSearch} />

				<div className='products_list'>
					<Container>
						<Row>
							{produs ? (
								<>
									{produs.slice(0, 6).map((prod, index) => {
										return (
											<Product
												prod={filterByInput(prod, inputValue)}
												key={"prod_" + index}
											/>
										);
									})}
								</>
							) : (
								<div>Loading ...</div>
							)}
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default Produse;
