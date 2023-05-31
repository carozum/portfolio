import { useState } from "react";

const Header = ()=>{
   
    const images = {
        Bayonne : {
            image : "bayonne.jpg",
            alt : "Les remparts de Bayonne"
        }, 
        Biarritz: {
            image: "biarritz.jpg",
            alt: "La côte des Basques à Biarritz et la Villa Belza"
        },
        Anglet: {
            image: "anglet.jpg",
            alt: "La forêt de pins à Anglet"
        }
    }

    const [city, setCity] = useState("Biarritz");

    return (
        <header >
            <p>In which city are you looking for ? </p>
            <p>
            <button onClick={()=>setCity("Bayonne")}>Bayonne</button>
            <button onClick={()=>setCity("Anglet")}>Anglet</button>
            <button onClick={()=>setCity("Biarritz")}>Biarritz</button>
            </p>
           
            <img 
                src={images[city].image} 
                alt={images[city].alt}
                width= "60%"
                />
            
            <p>Here is a list of gluten free restaurants in <strong>{city}</strong></p>
        </header>
    )
}

export default Header;


