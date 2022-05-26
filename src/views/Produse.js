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
		console.log("produsul e ", apiProdus);
		setProdus(apiProdus);
	};

	const onSearch = (input) => {
		setInputValue(input);
	};

	const filterByInput = (arrayProducts, searchValue) => {
		if (searchValue === null) return arrayProducts;

		return arrayProducts.filter((produs) => {
			return produs.name.toLowerCase().includes(searchValue.toLowerCase());
		});
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
												prod={filterByInput(produs, inputValue)}
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
