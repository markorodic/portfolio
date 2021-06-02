import React, { Component } from "react";
import "./App.css";
import gestureThumbnail from "./gesture_thumbnail.gif";
import perf_thumbnail from "./perf_thumbnail.gif";

function App() {
  return (
    <div className="App">
      <div className="email">
        <a href="mailto:mrmarkorodic@gmail.com?Subject=Hello%20👋">email</a>
      </div>
      <Hero />
      <Main />
    </div>
  );
}

class Hero extends Component {
  render() {
    return (
      <div className="splash">
        <section className="title">
          <span role="img" aria-label="wave-emoji">
            👋
          </span>
          <h1>I'm Marko</h1>
          <h3>
            These are some of the projects I worked on at the Recurse Center
          </h3>
        </section>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Projects />
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <WorkThumbNail
          thumbnail={perf_thumbnail}
          title={"JavaScript Performance Game"}
          link={"https://markorodic.github.io/the-brick-break/"}
        />
        <WorkThumbNail
          thumbnail={gestureThumbnail}
          title={"Gestural Code Editor"}
          link={"https://markorodic.github.io/lines_of_code/"}
        />
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div className="hero">
        <h2 className="title">Marko Rodic</h2>
        <div className="description">
          I'm a developer and a designer. I attended the Recurse Center in New
          York for 3 months. During this time...
        </div>
      </div>
    );
  }
}

class WorkThumbNail extends Component {
  render() {
    return (
      <a className="work-thumbnail" href={this.props.link}>
        <img src={this.props.thumbnail} alt="" />
        <label>{this.props.title}</label>
      </a>
    );
  }
}

export default App;
