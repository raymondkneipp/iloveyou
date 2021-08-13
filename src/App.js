import "./App.css";
import Landing from "./components/Landing";
import Otter from "./components/Otter";
import Since from "./components/Since";
import Timeline from "./components/Timeline";
import WordsOfAffirmation from "./components/WordsOfAffirmation";

function App() {
  return (
    <div className="App">
      <Landing />
      <Otter />
      <WordsOfAffirmation />
      <Since />
      <Timeline />
    </div>
  );
}

export default App;
