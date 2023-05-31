import {useState, useEffect } from 'react';

const ListRestos = (props) => {

    const [restos, setRestos] = useState([]);
    async function fetchRestos(){
        const response = await fetch(`${props.city}.json`);
        setRestos(await response.json());
    }

    useEffect(()=>{
        fetchRestos();
    });

    return (
        <div style={{
            display:"grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            margin: "3rem auto 1rem",
            width: "80vw"
        }}>
        {restos.map((resto) =>(
            resto.dietaryRestrictions.includes("Plats sans gluten") && (<div key={resto.id}>
                <a 
                    href={resto.website} 
                    target="_blank" 
                    key={resto.id} 
                    rel="noreferrer"
                >
                    <img src={resto.image} alt={resto.name} width="140px" />
                </a>
            </div>)
        )
        )}
        </div>
    );
}

export default ListRestos;
