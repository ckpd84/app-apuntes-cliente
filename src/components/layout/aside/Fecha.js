import React from "react";

const Fecha = () => {
	const diaActual = new Date();
	console.log(diaActual);
	return (
		<div>
			{diaActual.getDate()}
			{diaActual.getMonth()}
			{diaActual.getFullYear()}
		</div>
	);
};

export default Fecha;
