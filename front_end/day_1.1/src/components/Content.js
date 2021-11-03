import React from "react";

const Content = ({conteudo, status, bloco}) => {
  return (
    <div className="p-7">
      <p>O conteúdo é: {conteudo}</p>
      <p>Status: {status}</p>
      <p>Bloco: {bloco}</p>
    </div>
  );
}

export default Content;
