import './App.css';
import CountCard from './components/CountCard';
import Immer from './components/Immer';
import PizzaMenu from './components/PizzaMenu';
import PriceCard from './components/PriceCard';
import ReducerCart from './components/ReducerCart';
import ShoppingCart from './components/ShoppingCart';
import TempCard from './components/TempCard';
import TodoCard from './components/TodoCard';
import TweetCard from './components/TweetCard';

function App() {
 // const card = <CountCard />
  return (
    <div className="App">
      <PriceCard />
     <div style={{display:'flex'}}>
        <CountCard />
        <CountCard />
     </div>
     <TweetCard />
     <TempCard />
     <ShoppingCart />
     <TodoCard />
     <ReducerCart />
     <Immer />
     <h2>One of the tricker part in react is state is immutable </h2>
     <p>just click the above and open console</p>
     <h2> we have done deleting data in an array without mutating array </h2>
     <PizzaMenu />
    </div>
  );
}

export default App;
