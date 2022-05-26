import { Col, Button } from "reactstrap";

function Category({ cat }) {
	return (
		<Col xs='12' md='4' marginBottom='30px'>
			<img
				src='https://cdn.shopify.com/s/files/1/1573/5553/files/banner1_360x.jpg?v=1522250209'
				style={{
					height: "300px",
					objectFit: "cover",
					width: "100%",
					marginTop: "50px",
				}}
			/>
			<h3>{cat}</h3>
			<Button>Go to products</Button>
		</Col>
	);
}

export default Category;
