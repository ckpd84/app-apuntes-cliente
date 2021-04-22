import Header from "./components/layout/header/Header";
import Aside from "./components/layout/aside/Aside";
import Main from "./components/layout/main/Main";

function App() {
	return (
		<>
			<Header />
			<div className="w-full max-w-screen-2xl mx-auto">
				<div className="flex ">
					<Aside />
					<Main />
				</div>
			</div>
		</>
	);
}

export default App;
