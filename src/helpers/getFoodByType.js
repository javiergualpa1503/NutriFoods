import { alimentosCarbohidratos } from "../data/data"

export const getFoodByType = (tipo) => {
  
  return alimentosCarbohidratos.filter(data => data.tipo === tipo)
}
