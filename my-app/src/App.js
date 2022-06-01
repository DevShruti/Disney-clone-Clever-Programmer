import {Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route exact path="/" element={<Login />}>
        </Route>
        </Routes>
    
  </div>
  );
}

export default App;
