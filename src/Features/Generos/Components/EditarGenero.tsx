import { useParams } from "react-router"

export default function EditarGenero(){
    const {id}  = useParams();

    return(
        <>
        <h3>
            Editar Genero
        </h3>
        <p>el id es {id}</p>
        </>
    )
}