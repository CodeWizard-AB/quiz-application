import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import HomePage from "./Pages/HomePage.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import QuizPage from "./Pages/QuizPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResultPage from "./Pages/ResultPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>error</div>,
		children: [
			{
				index: "/",
				element: <HomePage />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "quiz",
				element: <QuizPage />,
			},
			{
				path: "result",
				element: <ResultPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
