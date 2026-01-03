import { Route, Routes } from "react-router";
import LandinPage from "./Features/Home/Components/landingPage";
//Generos
import ListGeneros from "./Features/Generos/Components/ListGeneros";
import CrearGenero from "./Features/Generos/Components/CrearGenero";
import EditarGenero from "./Features/Generos/Components/EditarGenero";
//Actores
import ListActores from "./Features/Actores/Components/ListActores";
import CrearActor from "./Features/Actores/Components/CrearActor";
import EditarActores from "./Features/Actores/Components/EditarActores";
//Cines
import ListCines from "./Features/Cines/Components/ListCines";
import CrearCine from "./Features/Cines/Components/CrearCine";
import EditarCines from "./Features/Cines/Components/EditarCines";
//Peliculas
import CrearPeliculas from "./Features/Peliculas/Components/CrearPeliculas";
import EditarPelicula from "./Features/Peliculas/Components/EditarPelicula";
import RutaNoEncontrada from "./components/RutaNoEncontrada";

export default function AppRoute(){
    return(
          <Routes>
              <Route path="/" element={<LandinPage />} />

              {/* Rutas de Géneros */}
            <Route path="/generos" element={<ListGeneros />} />
            <Route path="/generos/crear" element={<CrearGenero />} />
            <Route path="/generos/editar/:id" element={<EditarGenero />} />

            {/* Rutas de Actores */}
            <Route path="/actores" element={<ListActores />} />
            <Route path="/actores/crear" element={<CrearActor />} />
            <Route path="/actores/editar/:id" element={<EditarActores />} />

            {/* Rutas de Cines */}
            <Route path="/cines" element={<ListCines />} />
            <Route path="/cines/crear" element={<CrearCine />} />
            <Route path="/cines/editar/:id" element={<EditarCines />} />

            {/* Rutas de Películas */}
            <Route path="/peliculas/crear" element={<CrearPeliculas />} />
            <Route path="/peliculas/editar/:id" element={<EditarPelicula />} />

            <Route path="*" element={<RutaNoEncontrada />} />
          </Routes>
    )
}