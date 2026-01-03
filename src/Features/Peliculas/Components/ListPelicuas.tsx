import type Pelicula from "../Models/Peliculas.Model";
import PeliculaIndividual from "./PeliculaIndividual";
import styles from "./ListPeliculas.module.css"
import ListadoGenerico from "../../../components/ListadoGenerico";

export default function ListPeliculas(props: ListPeliculas){
    return(
        <ListadoGenerico<Pelicula> listado={props.peliculas}
        listadoVacionUI = {<>No hay peliculas para mostrar</>}>
        <div className={styles.div}>
            {props.peliculas?.map(p => <PeliculaIndividual key={p.id} pelicula={p} />)}
        </div>
        </ListadoGenerico>
    )

}

interface ListPeliculas{
    peliculas?: Pelicula[];
}