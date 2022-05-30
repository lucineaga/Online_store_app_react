import { Col } from "reactstrap";

function Product({ prod }) {
	return (
		<Col xs='12' md='3'>
			<img
				src={prod.image}
				style={{
					height: "200px",
					objectFit: "scale-down",
					width: "100%",
					marginTop: "30px",
				}}
			/>
			<h3 style={{ fontSize: "18px" }}>{prod.title}</h3>
			<p>{prod.price}</p>
		</Col>
	);
}

export default Product;
