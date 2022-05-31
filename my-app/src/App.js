import { Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route exact path="/" element={<Login />}>
        </Route>
        </Routes>
    
  </div>
  );
}

export default App;
