import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<main className="page-height">
				<Outlet />
			</main>
		</div>
	);
}

export default App;
