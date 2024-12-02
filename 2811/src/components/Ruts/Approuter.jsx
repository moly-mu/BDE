import { Route, Routes } from "react-router-dom"
import Insesion from "../Insesion"
import {Busqueda, Reg} from "../components/Ruts"
import Privateroute from "./Privateroute"




export const Approuter = () => {
  return <>
  <Routes>

        <Route path="inicioS"element={<Privateroute> <Insesion/> </Privateroute>} />

        <Route path="Bus"element={<Privateroute> <Busqueda /> </Privateroute>} />

        <Route path="regis"element={<Privateroute> <Reg /> </Privateroute>} />
       
  </Routes>
  </>
}


export default Approuter
