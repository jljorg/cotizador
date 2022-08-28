import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

import React from 'react'

const useCotizador = () => {
  return  useContext(CotizadorContext)
}

export default useCotizador