function ResultPage() {
	return (
		<div className="max-w-screen-xl mx-auto py-16">
			<Header />
			<Result />
		</div>
	);
}

function Header() {
	return (
		<figure className="grid grid-cols-2 items-center">
			<figcaption className="text-center font-semibold text-2xl">
				Your score is 5 out of 10
			</figcaption>
			<img src="result.avif" alt="result banner image" className="w-2/3" />
		</figure>
	);
}

function Result() {
	return (
		<section className="mt-10">
			<h1 className="text-3xl font-semibold mb-2">Question Analysis</h1>
			<p>You answer 5 out of 10 question correctly</p>
			<Question />
		</section>
	);
}

function Question() {
	return <div>
    <p></p>
  </div>;
}

export default ResultPage;
