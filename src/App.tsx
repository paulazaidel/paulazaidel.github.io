import styled from "styled-components";

import Navbar from "../src/components/Navbar";
import Header from "./components/header";

function App() {
  return (
    <>
      <Main>
        <Navbar></Navbar>
        <Header></Header>
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
`;

export default App;
