import './App.css';
import Greet from './components/GreetFunc';
import { GreetConst } from './components/GreetConst'
import Welcome from './components/WelcomeClass'

function App() {
  return (
    <div className="App">
      <Greet />
      <GreetConst />
      <Welcome />
    </div>
  );
}

export default App;
