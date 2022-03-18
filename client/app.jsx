import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/mainPage";
import { CvPage } from "./pages/cvPage";
import { ContactPage } from "./pages/contactPage";

function TestPage() {
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path={"/test-env"} element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
