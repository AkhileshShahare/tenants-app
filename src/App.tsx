import React from "react";
import TenantsList from "./components/TenantsList";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TenantDetails from "./components/TenantDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TenantsList />} />
        <Route path="/:id" element={<TenantDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
