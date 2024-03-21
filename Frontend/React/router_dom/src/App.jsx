import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import "./components/Menu.css"

export default function App() {


  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

