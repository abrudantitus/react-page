import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import { HashRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./css/app/app.css";
import "./css/app/vt323.css";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <ScrollTop />
          <CSSTransition key={location.key} timeout={300} classNames="fade" >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/timeline" component={Timeline} />
              <Route path="/about" component={About} />
              <Route path="/projects/:id" component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      <Footer />

    </div>

  );
}

export default App;
