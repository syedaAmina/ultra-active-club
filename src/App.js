import "./App.css";
import GYMBody from "./components/GYMBody/GYMBody";
import Header from "./components/Header/Header";
import QA from "./components/QA/QA";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GYMBody></GYMBody>
      <QA></QA>
    </div>
  );
}

export default App;
