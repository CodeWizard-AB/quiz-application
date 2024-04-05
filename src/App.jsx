import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizPage from "./Pages/QuizPage";

function App() {
	return (
		<div>
			<NavBar />
			<main className="page-height">
				{/* <Outlet /> */}
				<QuizPage />
			</main>
		</div>
	);
}

export default App;
