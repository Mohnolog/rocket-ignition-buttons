import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <section>
      <Header />
      <main>
        <Buttons
          className="buttons"
          switch1={switch1}
          setSwitch1={setSwitch1}
          switch2={switch2}
          setSwitch2={setSwitch2}
          switch3={switch3}
          setSwitch3={setSwitch3}
        />
        <Output
          className="output"
          switch1={switch1}
          switch2={switch2}
          switch3={switch3}
        />
      </main>
      <Footer />
    </section>
  );
}

export default App;
