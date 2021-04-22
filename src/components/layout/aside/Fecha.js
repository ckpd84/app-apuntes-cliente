import React from "react";

const Fecha = () => {
	const fechaActual = new Date();
	const mesActual = fechaActual.getMonth();
	const dia = fechaActual.getDate();
	const anho = fechaActual.getFullYear();
	let mesNombre = "";
	let diaDeLaSemana = "";
	const meses = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	const dias = [
		"Domingo",
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
	];

	meses.map((mes, i) => {
		if (mesActual === i) mesNombre = mes;
	});
	dias.map((dia, i) => {
		if (fechaActual.getDay() === i) diaDeLaSemana = dia;
	});

	return (
		<div className='mb-4'>
			<p className='font-medium'>{`${diaDeLaSemana}, ${dia} de ${mesNombre} de ${anho}`}</p>
		</div>
	);
};

export default Fecha;
