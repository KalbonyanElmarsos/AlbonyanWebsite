import "./App.css";
import Awards from "./component/awards/Awards";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Tasks from "./component/tasks/Tasks";
import Way from "./component/way/Way";
import Winners from "./component/winners/Winners";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Subject from "./component/subject/Subject";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <Subject /> */}
      <Awards />
      <Tasks />
      <Way />
      <Winners />
      <Footer />
    </div>
  );
}

export default App;
