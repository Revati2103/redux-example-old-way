
import { increment, decrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch(); 
  return (



    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Info</h3> : '' }
      
    </div>
  );
}

export default App;
