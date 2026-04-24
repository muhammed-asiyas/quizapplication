import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login from "./components/Login/Login";
import Context from "./components/context/context";
import Sidebar from "./components/SideBar/Sidebar";
import CategoryPage from "./components/Pages/CategoryPage/CategoryPage";

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
          <Sidebar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CategoryPage />}/>
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
