import Account from "./Account";
import Logo from "./Logo";

function NavBar() {
	return (
		<div className="px-20 h-20 flex justify-between items-center shadow-md sticky">
			<Logo />
			<Account />
		</div>
	);
}

export default NavBar;
