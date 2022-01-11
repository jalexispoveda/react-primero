import "./App.css";
import HabitModule from "./components/habit/HabitModule";
import CounterApp from "./components/counter/CounterApp";

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      <HabitModule></HabitModule>
      <CounterApp value={1}></CounterApp>
    </div>
  );
}

export default App;
