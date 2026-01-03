import { useNavigate } from "react-router";
import Boton from "../../../components/boton";

export default function ListActores(){
    const navigate = useNavigate();
    return(
        <>
        <h3>Lista de actores</h3>
        <Boton onclick={() => navigate("/actores/crear")}>
            Crear Actor
        </Boton>
        </>
    )
}