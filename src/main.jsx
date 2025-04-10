import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import KeyScreen from "./screens/KeyScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/*Wrap App with BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/key" element={<KeyScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

