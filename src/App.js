import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import ScrollTop from "./tools/scrollTop/ScrollTop";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WinnersPage from "./pages/winnersPage/WinnersPage";
import "./App.css";
import Loader from "./component/loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/winners" element={<WinnersPage />} />
          </Routes>
          <Footer />
          <ScrollTop />
        </>
      )}
    </div>
  );
}

export default App;
