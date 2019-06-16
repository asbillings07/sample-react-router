import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// App Components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

/**
 * BrowserRouter tags - renders the root router that listens for URL changes

Path - indicates the URL to match and the component prop specifies which react component to render when the URL matches the route path

exact path - instructs the component to render only when the path matches exactly what's in the path. 

Swtich - will only render the first route that matches the URL. If it finds no URL it will fall back to the component only route
 */

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title="About" />} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
