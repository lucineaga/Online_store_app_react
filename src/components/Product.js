import { Col } from "reactstrap";

function Product({ prod }) {
	return (
		<Col xs='12' md='4'>
			<img
				src={prod.image}
				style={{
					height: "200px",
					objectFit: "cover",
					width: "100%",
					marginTop: "30px",
				}}
			/>
			<h3>{prod.title}</h3>
			<p>{prod.price}</p>
		</Col>
	);
}

export default Product;
