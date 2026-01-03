import { useNavigate } from "react-router";
import Boton from "../../../components/boton";

export default function ListCines(){
    const navigate = useNavigate();
    return(
        <>
        <h3>Lista de Cines</h3>
        <Boton onclick={() => navigate("/cines/crear")}>
            Crear Cines
        </Boton>
        </>
    )
}