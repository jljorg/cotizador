import React, { Fragment /*, useContext*/ } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
//import CotizadorContext from '../context/CotizadorProvider'
import useCotizador from "../hooks/useCotizador";
import Error from "../componets/Error";

/*primera forma  de llamar el contes se llama primero el use contex desppues el CotizadorContext y 
abajo creamos la constante que retorna las variable del CotizadorContext.jsx  llamamos el hook yse context y le pasamos
la varible del componente   import CotizadorContext from '../context/CotizadorProvider'
la 
const {hola,marca,setMarca,setModal,modal}= useContext(CotizadorContext)
*/
/* segunda opcion es crear un hook useCotizador que ya esta en la carpeta hooks 
 hacemos el llamado de las variables  y le asiganosm el hook de  useCotizador 

 ejemplo
 const {hola,marca,setMarca,setModal,modal}=
  */

const Formulario = () => {
  //sin el hook y llamando cada carpeta
  //const {hola,marca,setMarca,setModal,modal}= useContext(CotizadorContext)

  //con el hook
  // const {marca,setMarca/*,setModal,modal*/}=useCotizador()

  const { datos, handleDatos,error,setError,cotizarSeguro } = useCotizador();
  const handleSubmit =(e)=>{
      e.preventDefault();
      if(Object.values(datos).includes('')){
          setError('llene los campos')
          return
      }

      setError()
      cotizarSeguro(datos)
  }

  


  return (
    /*
    <button type='button' onClick={e=>setModal(true)}>click</button>
    {modal ? "modal abierto":null}
    */

    <>
    {error && <Error></Error>}
      <form action="" onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full p-3 bg-white border border-gray-200"
            /*onChange={e=>setMarca(e.target.value)}*/
            onChange={(e) => handleDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Seleccione --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            id="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleDatos(e)}
            value={datos.year}
          >
            <option value="">-- Seleccione --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elije plan
          </label>
          <div className="flex gap-2 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  onChange={(e) => handleDatos(e)}
                  value={plan.id}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
