import "./App.css";
import Project from "./sections/Project/Project";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Title from "./sections/Title/Title";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Tech from "./sections/Tech/Tech";

function App() {
  return (
    <>
      <Nav />
      <Hero></Hero>
      <div>
        <Title title="Projects" />
        <Project />
        <Title title="About" />
        <About />
        <Title title="Technology" />
        <Tech />
        <Title title="Contacts" />
        <Contact />
      </div>
    </>
  );
}

export default App;
