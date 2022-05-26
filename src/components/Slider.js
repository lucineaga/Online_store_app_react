import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
	return (
		<>
			<Carousel variant='dark'>
				<Carousel.Item interval={1000}>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1573/5553/files/slide21_1728x.jpg?v=1512218412'
						alt='First slide'
					/>
					<Carousel.Caption>
						<div className='ProductInfo'> Informatii produs </div>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item interval={500}>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1573/5553/files/slide22_1728x.jpg?v=1512218436'
						alt='Second slide'
					/>
					<Carousel.Caption>
						<div className='ProductInfo'> Informatii produs </div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1573/5553/files/slide23_1728x.jpg?v=1512218450'
						alt='Third slide'
					/>
					<Carousel.Caption>
						<div className='ProductInfo'> Informatii produs </div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default Slider;
