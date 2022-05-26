import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<div className='container_navbar'>
			<img className='styled_logo' src='/logo_app.svg' />

			<div className='top_links'>
				<div className='links_left1'>
					<Link className='links' to='/'>
						Home
					</Link>
					<Link className='links' to='/Produse'>
						Produse
					</Link>
				</div>
				<div className='links_right1'>
					<Link className='links' to='/Wishlist'>
						Wishlist
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
