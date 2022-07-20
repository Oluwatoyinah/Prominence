import About from "./components/About";
import Contact from "./components/Contact";
import CoreValues from "./components/CoreValues";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Partner from "./components/Partner";
import Pricing from "./components/Pricing";
// import Subscribe from "./components/Subscribe";
import Trial from "./components/Trial";

const App = () => {
  return (
    <>
      <Nav />
       <Header />
       <About />
       <CoreValues />
       <Features />
       {/* <Partner /> */}
       <Pricing />
       <Trial /> 
       <Contact />
       {/* <Subscribe /> */}
       <Footer />
    </>
  );
}

export default App;
