import React, { useCallback, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const [nombreMarca] = useCallback( MARCAS.filter(m=> m.id === Number(marca)),[resultado])
  const [nombrePlan] = useCallback(  PLANES.filter(p=> p.id === Number(plan)),[resultado])

  const yearRef =useRef(year)
  if (resultado === 0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-500 font-black text-3xl ">Resumen</h2>
      <p className="my-2">
          <span className="font-bold"> Marca : </span>
          {nombreMarca.nombre}
           
          </p>
          <p className="my-2">
          <span className="font-bold"> plan : </span>
          {nombrePlan.nombre}
           
          </p>
          <p className="my-2">
          <span className="font-bold"> Año auto :  </span>
          {yearRef.current}
           
          </p>
          <p className="my-2 text-2xl">
          <span className="font-bold"> Resultado  :  </span>
          {resultado}
           
          </p>
    </div>
  );
};

export default Resultado;
