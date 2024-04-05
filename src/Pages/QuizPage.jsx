import { useState } from "react";

function QuizPage() {
	return (
		<div className="max-w-screen-xl mx-auto py-12">
			<Header />
			<p className="py-3 mb-10 border-b-2">Question can have multiple answer</p>
			<QuizContainer />
		</div>
	);
}

function Header() {
	return <h1 className="font-semibold text-4xl">Pick your question</h1>;
}

function QuizContainer() {
	return (
		<div className="grid grid-cols-2 gap-3">
			{Array.from({ length: 5 }, (i) => (
				<Quiz key={i} />
			))}
		</div>
	);
}

function Quiz() {
	const [checked, setChecked] = useState(false);
	return (
		<button
			className={`rounded-sm flex items-center p-3 gap-3 ${
				checked ? "bg-green-400" : "bg-gray-300"
			}`}
			onClick={() => setChecked(!checked)}
		>
			<input type="checkbox" />
			<p className="text-xl">Option</p>
		</button>
	);
}

export default QuizPage;
