import "./App.css";
import Awards from "./component/awards/Awards";
import Curriculum from "./component/curriculum/Curriculum";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Tasks from "./component/tasks/Tasks";
import Way from "./component/way/Way";
import Winners from "./component/winners/Winners";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Curriculum />
      <Awards />
      <Tasks />
      <Winners />
      <Way />
      <Footer />
    </div>
  );
}

export default App;
