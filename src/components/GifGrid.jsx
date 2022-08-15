import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({category}) => {
 const {images,isLoading} = useFetchGifs(category);

 console.log({images,isLoading})
   
 
 
    return (
    <>


        <h3>{category}</h3>
        
        {
          isLoading
          ? (<h2>Cargando...</h2>)
          : null
        }

        <div className="card-grid">
        {
          images.map( image => (
           < GifItem 
           
           key={image.id}
           {...image}
          //  con el spread esparcimos todo lo que hicimos destructurindel json del data y seria exactamente como lo que tenemos aca abajo
          //  key={image.id}
          //  title={ image.title}
          // url ={ image.url}
           />
         ))
        }

        </div>
        

    </>
  )
}
