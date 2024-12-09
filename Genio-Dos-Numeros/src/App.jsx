import React, { useState } from "react";
import "./App.css";

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("");

  const verificarPalpite = () => {
    const numero = parseInt(palpite);
    if (isNaN(numero)) {
      setMensagem("Por favor, insira um número válido.");
      return;
    }

    if (numero < numeroSecreto) {
      setMensagem("O número é maior.");
    } else if (numero > numeroSecreto) {
      setMensagem("O número é menor.");
    } else {
      setMensagem("🎉 Parabéns! Você acertou! 🎉");
    }
  };

  const reiniciarJogo = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setPalpite("");
    setMensagem("");
  };

  return (
    <div className="container">
      <h1>🎮 Jogo: Adivinhe o Número 🎮</h1>
      <p>Digite um número entre 1 e 100:</p>
      <div className="input-area">
        <input
          type="number"
          value={palpite}
          onChange={(e) => setPalpite(e.target.value)}
        />
        <button onClick={verificarPalpite}>Enviar</button>
      </div>
      <p className="mensagem">{mensagem}</p>
      {mensagem === "🎉 Parabéns! Você acertou! 🎉" && (
        <button className="reiniciar" onClick={reiniciarJogo}>
          Jogar novamente
        </button>
      )}
    </div>
  );
}

export default App;
