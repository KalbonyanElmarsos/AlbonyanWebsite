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
import Testimonial from "./component/testimonial/Testimonial";
import ScrollTop from "./tools/scrollTop/ScrollTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Subject />
      <Awards />
      <Tasks />
      <Way />
      <Winners />
      <Testimonial />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
