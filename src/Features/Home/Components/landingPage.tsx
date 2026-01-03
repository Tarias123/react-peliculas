import { useEffect, useState } from "react";
import ListPeliculas from "../../Peliculas/Components/ListPelicuas";
import type Pelicula from "../../Peliculas/Models/Peliculas.Model";

export default function LandinPage(){
  const[peliculas, setPeliculas] = useState<AppState>({});

  useEffect (() => {
    setTimeout(() => {
    const enCines : Pelicula[] = [{
    id: 1,
    titulo: "sonic",
    poster: "https://i5.walmartimages.com/seo/Sonic-the-Hedgehog-Movie-Poster-Print-11-x-17-Item-MOVEB87955_c93638bf-7c44-4322-8e3d-a3ca841e4e9e.f7f4dc885d6d6a6460b706c9fb4ee621.jpeg"
  },{
    id:2,
    titulo: "johnWick 4",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiXXhA1PXnQD3yCJzRgc2YhNLZMvIpIpUxI2BxNug0Whg_gOmsEv7aoes0Wzi0FcXK2e5h03_U_idJyV8__EY8gwmfKjY6VKipI5OZA&s=10"
  }];

  const ProxEstrenos: Pelicula[] = [{
    id: 3,
    titulo: "Spiderman",
    poster: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png"
  }];
  
  setPeliculas({enCines, ProxEstrenos})

    }, 1000)
  }, [ ])
  return(
    <>
          <h3>En cines</h3>
          <ListPeliculas peliculas={peliculas.enCines} />
          
          <hr />
          <h3>Proximos Estrenos</h3>
          <ListPeliculas peliculas={peliculas.ProxEstrenos} />
    </>
    )
}


interface AppState {
  enCines?: Pelicula[];
  ProxEstrenos?: Pelicula[];
}