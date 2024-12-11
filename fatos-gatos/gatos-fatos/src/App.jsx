import { useState, useEffect } from "react";
import "./App.css";

import api from "./services/api";

function App() {
  const [fact, setFact] = useState([]);

  async function handleFact() {
    const response = await api.get("/fact");
    setFact(response.data);
  }

  useEffect(() => {
    handleFact();
  }, []);
  return (
    <>
      <div className="backgroundContainer">
        <div className="container">
          <div className="catHead">
            <div className="leftCatEar"></div>
            <div className="rightCatEar"></div>
          </div>
          <button onClick={() => handleFact()} className="factButton">
            Novo Fato!
          </button>

          <span className="factText">{fact.fact}</span>
        </div>
      </div>
    </>
  );
}

export default App;
