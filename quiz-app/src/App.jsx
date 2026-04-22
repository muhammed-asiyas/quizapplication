import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Context from "./components/context/context";

function App() {
  const [isActiveNav, setActiveNav] = useState("Home");
  const onChangeActiveNavId = (id) => {
    setActiveNav(id);
  };
  console.log(isActiveNav)
  return (
    <>
      <Context.Provider
        value={{
          isActiveNav,
          onClickNav: onChangeActiveNavId,
        }}
      >
        <div className="app-container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
