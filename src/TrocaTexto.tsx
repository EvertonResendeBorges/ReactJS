import React, { useState } from "react";

function TrocaTexto() {
  const [texto, setTexto] = useState("");

  const atualizarTexto = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <label htmlFor="campo1">Digite algo:</label>
      <input type="text" id="campo1" onChange={atualizarTexto} />

      <label htmlFor="campo2">O que você digitou:</label>
      <input type="text" id="campo2" value={texto} />
    </div>
  );
}

export default TrocaTexto;
