import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Routing from "./routes/routes";

function App() {
  return (
    <>
      <Routes>
        {Routing.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
