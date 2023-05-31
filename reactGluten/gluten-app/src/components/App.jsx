import '../App.css';
import Count from './Count';
import Main from './Main';
import Welcome from './Welcome';


function App() {
  let chosenType = "gluten friendly";

  return (
    <div className="App">
      <Welcome type = {chosenType} />
      <Main type= {chosenType}/>
      <Count/>
    </div>
  );
}

export default App;
