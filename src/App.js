import Sigin from "./Components/Auth/Sigin";
import SignUp from "./Components/Auth/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sigin/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
