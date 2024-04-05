import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="max-w-screen-xl mx-auto py-16 grid grid-cols-3 gap-5">
			<Video />
			<Video />
			<Video />
			<Video />
		</div>
	);
}

function Video() {
	return (
		<Link to='/quiz'>
			<figure className="bg-slate-50 p-4 rounded-md cursor-pointer">
				<img src="banner.jpg" alt="banner" className="rounded-md" />
				<figcaption className="grid grid-cols-2 mt-3">
					<h1 className="col-span-2">Tilte</h1>
					<p></p>
					<p></p>
				</figcaption>
			</figure>
		</Link>
	);
}

export default HomePage;
