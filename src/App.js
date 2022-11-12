import "./App.css";

import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import ScrollTop from "./tools/scrollTop/ScrollTop";

import {  Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WinnersPage from "./pages/winnersPage/WinnersPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/kalbonyanElmarsosWebsite" element={<HomePage />} />
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
