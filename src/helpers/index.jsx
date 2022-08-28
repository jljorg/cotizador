export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMatricula(marca) {
  let incremento;
  switch (marca) {
    case "1":
      incremento = 1.3;

      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
}
export function calcularPlan(plan){
    let valor
      if (plan==="1") {
          valor= 1.2

        
    }
    if (plan==="2") {
        valor= 1.5

      
  }
  if (plan==="3") {
    valor= 1

  
}
    return valor
}

export function formatearPrecio(cantidad){

return  cantidad.toLocaleString(
    'es-CO',{
        style : 'currency',
        currency:'COP'
    })
}
