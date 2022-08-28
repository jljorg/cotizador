import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMatricula,
  calcularPlan,
  formatearPrecio,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  //const [marca,setMarca]=useState();
  //const [modal,setModal]=useState(false)
  // console.log(marca)
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado,setResultado]=useState(0)
  const [cargando,setCargando]=useState(false)
  const handleDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = (datos) => {
    let resultado = 2000;
    //console.log('cotizando.......'+datos.marca)
    const diferencia = obtenerDiferenciaYear(datos.year);
    console.log(diferencia)
    resultado -= (diferencia * 3 * resultado) / 100;
     //console.log(resultado)
    //multiplica  resultado por el porcetaje que esta en el swithcase
    resultado *= calcularMatricula(datos.marca);
     //console.log(resultado)
    resultado *= calcularPlan(datos.plan);
    //console.log(resultado)
    resultado = formatearPrecio(resultado);
    //console.log(resultado)
    setCargando(true)

    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
     
    }, 2000);
  }
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
        setCargando

        /*
            marca,
            setMarca
            ,setModal,modal*/
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
