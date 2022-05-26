import { Link } from "react-router-dom";
import "./Footer.css";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";

function Footer() {
	return (
		<>
			<div className='footer_container'>
				<div className='footer_container_left'>
					<div className='util_links'>
						<Link className='links_footer' to='/'>
							Home
						</Link>
						<Link className='links_footer' to='/Produse'>
							Produse
						</Link>
					</div>
					<div className='company'>COMPANY NAME @2022</div>
				</div>

				<div className='footer_container-right'>
					<ul>
						<li>
							<a href='www.facebook.com'>
								<AiFillFacebook size='2em' />
							</a>
						</li>
						<li>
							<a href='www.twitter.com'>
								<AiFillTwitterSquare size='2em' />
							</a>
						</li>
						<li>
							<a href='www.linkedin.com'>
								<AiFillLinkedin size='2em' />
							</a>
						</li>
						<li>
							<a href='www.github.com'>
								<AiFillGithub size='2em' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Footer;
