import { useParams } from "react-router"

export default function EditarActores(){
    const {id} = useParams();
    return(
        <>
        <h3>Editar actores</h3>
        <p>el id es {id}</p>
        </>
    )
}