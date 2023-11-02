import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Learn from "./Components/Learn/Learn";
import Descover from "./Components/Descover/Descover";
import What from "./Components/What/What";
import Training from "./Components/Training/Training";
function App() {
  const [count, setCount] = useState(0);

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
      <Nav />
      <Hero />
      <Learn />
      <Descover />
      <What />
      <Training />
    </>
  );
}

export default App;
