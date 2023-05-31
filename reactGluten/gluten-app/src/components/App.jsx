import '../App.css';
import Count from './Count';
import Header from './Header';
import Welcome from './Welcome';

function App() {

  return (
    <div className="App">
      <Welcome type="gluten free" />
      <Header />
      <Count/>
    </div>
  );
}

export default App;
