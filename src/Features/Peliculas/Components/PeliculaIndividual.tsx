import type Pelicula from "../Models/Peliculas.Model";
import styles from "./PeliIndi.module.css"

export default function PeliculaIndividual(props: PeliculaIndividual){
    
    const ConstrucLink = () => `/pelicula/${props.pelicula.id}`
    
    return(
        <>
            <div className={styles.div}>
                <a href={ConstrucLink()}>
                    <img alt="poster" src= {props.pelicula.poster} />
                </a>
                <p>
                    <a href={ConstrucLink()}>{props.pelicula.titulo}</a>
                </p>
            </div>
        </>
    )

}

interface PeliculaIndividual{
    pelicula: Pelicula
}