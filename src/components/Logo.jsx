import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link to="/">
			<figure className="flex items-center gap-3">
				<img src="image.png" alt="brand logo" className="w-10" />
				<figcaption className="font-bold">Learn with Summit</figcaption>
			</figure>
		</Link>
	);
}

export default Logo;
