import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
	return (
		<>
			<Carousel variant='dark'>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3 className='ProductInfo'>Solid Gold Petite Micropave</h3>
						<p className='ProductInfoPara'>
							Satisfaction Guaranteed. Return or exchange any order within 30
							days.Designed and sold by Hafeez Center in the United States.
						</p>
						<Link to='/Produse'>
							<Button>Go to Products</Button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1573/5553/files/slide21_1728x.jpg?v=1512218412'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3 className='ProductInfo'>
							Mens Casual Premium Slim Fit T-Shirts
						</h3>
						<p className='ProductInfoPara'>
							Slim-fitting style, contrast raglan long sleeve, three-button
							henley placket, light weight and soft fabric for breathable and
							comfortable wearing.
						</p>
						<Link to='/Produse'>
							<Button>Go to Products</Button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1573/5553/files/slide22_1728x.jpg?v=1512218436'
						alt='Second slide'
					/>
					<Carousel.Caption>
						<h3 className='ProductInfo'>Mens Cotton Jacket</h3>
						<p className='ProductInfoPara'>
							Great outerwear jackets for Spring/Autumn/Winter, suitable for
							many occasions, such as working, hiking, camping, mountain/rock
							climbing, cycling, traveling or other outdoors.
						</p>
						<Link to='/Produse'>
							<Button>Go to Products</Button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default Slider;
