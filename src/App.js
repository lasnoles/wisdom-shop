import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage=()=>(
  <div>hats</div>
)

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
