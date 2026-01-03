import { useParams } from "react-router"

export default function EditarCines(){
    const {id} = useParams();

    return(
        <>
        <h3>Editar Cines</h3>
        <p>El id es {id}</p>
        </>
    )
}