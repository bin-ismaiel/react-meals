import React from "react";
import { Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleMeal from "./pages/SingleMeal";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
// import components

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="meal/:mealId" element={<SingleMeal />} />
      </Routes>
    </Layout>
  );
}

export default App;
