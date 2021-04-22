import React from "react";
import Fecha from "./Fecha";

const Aside = () => {
	return (
		<aside class="py-10 flex-none static w-80 px-12 bg-amarillo">
			<Fecha />
			<div>clima</div>
			<div>+ agregar apunte</div>
		</aside>
	);
};

export default Aside;
