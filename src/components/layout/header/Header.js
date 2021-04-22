import logo from "../../../assets/images/logo-apuntes.png";

const Header = () => {
	return (
		<header className="sticky py-4 top-0 z-20 w-full max-w-screen-2xl mx-auto bg-white flex-none flex ">
			<div className="">
				<img src={logo} alt="logo-apuntes" />
			</div>
			<div className="flex-auto border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
				<div>buscador</div>
				<div>nombre de usuario</div>
			</div>
		</header>
	);
};

export default Header;
