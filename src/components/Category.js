import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Category({ cat }) {
	return (
		<Col xs='12' md='4' marginbottom='50px'>
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
			<Link to='/Produse'>
				<Button>Go to Products</Button>
			</Link>
		</Col>
	);
}

export default Category;
