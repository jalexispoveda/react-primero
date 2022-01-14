import HabitModule from "./components/habit/HabitModule";
import CounterApp from "./components/counter/CounterApp";
import PrimeraApp from "./PrimeraApp";

function App() {
  return (
    <div className="App">
      {/* <HabitModule></HabitModule> */}
      <PrimeraApp saludo="HOLA" subtitulo="Alekei"></PrimeraApp>
      <CounterApp value={1}></CounterApp>
    </div>
  );
}

export default App;
