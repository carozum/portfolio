const dishes = [
    "cassoulet",
    "gateau basque",
    "jambon de Bayonne",
    "pisco"
];

const dishObjects = dishes.map((dish, i) => ({
    index: i,
    title : dish
}
));

function Header(props){
    return (
        <header>
            <h1>Où manger sans gluten à {props.city}?</h1>
        </header>
    )
}

function Main(props){
    return(
        <section> 
            <p>Tous les restaurants de votre région, {props.region}</p>
            <p>Au menu:</p>
            <ul>
                {props.dishes.map((dish) => (
                    <li key={dish.index}>{dish.title}</li>
                ))}
            </ul>
        </section>
    );
}
function Footer(props){
    return(
        <footer> 
            <p>Copyright {props.date}</p>
        </footer>
    );
}

function App(){
    return(
        <div>
            <Header city="Bayonne"/>
            <Main 
                region="le Pays Basque"
                dishes ={dishObjects}
            />
            <Footer date = {new Date().getFullYear()}/>
        </div>          
    );
}

ReactDOM.render(
    <App/>, 
    document.querySelector("#root")
);