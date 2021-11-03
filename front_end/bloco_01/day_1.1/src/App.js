import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import conteudos from "./contentData";

function App() {
  return (
    <div className="App max-w-screen-sm mx-auto">
      <Header />
      {conteudos.map((e, index) => <Content key={index} conteudo={e.conteudo} status={e.status} bloco={e.bloco} />)}
    </div>
  );
}

export default App;
