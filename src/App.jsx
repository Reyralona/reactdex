import Card from "../components/Card";
import { range } from "/src/tools.js";

function App() {
  return (
    <div className="container">
      {Array(1010).fill(0).map((poke, i) => (
        <Card key={`pokemon${i + 1}`} PokeId={i + 1}></Card>
      ))}
    </div>
  );
}

export default App;
