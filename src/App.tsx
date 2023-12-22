import "./App.css";
import RotatingCircle from "./Components/RotatingCircle";

function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full h-96 bg-black"></div>
      <RotatingCircle />

      <div className="w-full h-screen"></div>
    </div>
  );
}

export default App;
