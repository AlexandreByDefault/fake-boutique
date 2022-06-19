import { createContext } from "react";
const stateProduct = {
  add : 'add',
  added : 'added'
}
export const ProducContext = createContext(stateProduct)
