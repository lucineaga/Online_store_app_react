import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Produse from "./views/Produse";

import NavBar from "./common/NavBar";
import Footer from "./common/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<div style={{ marginTop: "60px", marginBottom: "40px" }}>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/Produse' element={<Produse />}></Route>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
