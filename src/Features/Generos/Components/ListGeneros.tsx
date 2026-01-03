import { useNavigate } from "react-router";
import Boton from "../../../components/boton";

export default function ListGeneros(){
    const navigate = useNavigate();

    return(
        <>
        <h3>Generos</h3>
        <Boton onclick={() => navigate("/generos/crear")}>
            Crear Genero
        </Boton>
        </>
    )
}