import './App.css';
import Users from './component/Users/Users';
import Todos from './component/Todos/Todos';
import Cart from './component/Cart/Cart';


function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <hr />
      <Users />
      <hr />
      <Todos />
      <hr />
      <Cart />
      <hr />

    </div>
  );
}

export default App;
