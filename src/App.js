import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";//para el tema oscuro
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwichertTema from "./Components/SwichertTema";

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema(() => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwichertTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
