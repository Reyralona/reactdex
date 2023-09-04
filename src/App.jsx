import { useState } from "react";
import SweetPagination from "sweetpagination";
import Pokecard from "../components/Pokecard";

function App() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const items = Array(1010)
    .fill(0)
    .map((poke, i) => (
      <Pokecard key={`pokemon${i + 1}`} PokeId={i + 1}></Pokecard>
    ));

  return (
    <>
      <div className="outercontainer">
        <div className="container">
          {currentPageData.map((item, id) => (
            <div key={id}>{item}</div>
          ))}
        </div>
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={48}
          getData={items}
          navigation={true}
        />
      </div>
    </>
  );
}

export default App;
