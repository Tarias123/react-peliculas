import type React from "react"
import Cargando from "./Cargando"

export default function ListadoGenerico<T>(props: ListadoGenerico<T>){
    if(!props.listado){
        return props.cargandoUI ? props.cargandoUI : <Cargando />
    }
    else if(props.listado.length ===0){
        return props.listadoVacionUI ? props.listadoVacionUI : "No hay elementos para mostrar"
    }else{
        return props.children 
    }


}

interface ListadoGenerico<T>{
    listado?: T[];
    children: React.ReactNode;
    listadoVacionUI?: React.ReactNode;
    cargandoUI?: React.ReactNode;
}