import Header from "./Components/Header.jsx";
import CoreConcept2 from "./Components/CoreComponents2.jsx";
import Examples from "./Components/Examples.jsx";
import CoreComponents from "./Components/CoreComponents2.jsx";

function App() {

  return (
    <>
      <header>
          <h1>
            Hello World I'm Sahil & this is my First React Project...
          </h1>
      </header>
      <Header />
      <main>
        <CoreComponents/>
        <Examples />
      </main>
    </>
  );
}

export default App;
