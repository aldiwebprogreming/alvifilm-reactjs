import "./App.css";
import "./style/landing.css";
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro";
import Tranding from "./components/Tranding";
import Superhero from "./components/Superhero";
function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar /> 
        <Intro />
      </div>

      <div className="tranding">
        <Tranding />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
     
    </div>
  );
}

export default App;
