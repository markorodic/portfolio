import React, { Component } from "react";
import logo from "./logo.svg";
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
          <h1>👋, I'm Marko</h1>
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
        {/* <Header /> */}
        <Projects />
      </div>
    );
  }
}

// class Header extends Component {
//   render() {
//     return (
//       <div className="header">
//         <h2 className="title">Marko Rodic</h2>
//         <Nav />
//       </div>
//     );
//   }
// }

// class Nav extends Component {
//   render() {
//     return (
//       <ul className="nav">
//         <li>
//           <a>All</a>
//         </li>
//         <li>
//           <a>Technical</a>
//         </li>
//         <li>
//           <a>Design</a>
//         </li>
//         <li>
//           <a>Product</a>
//         </li>
//       </ul>
//     );
//   }
// }

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <WorkThumbNail
          thumbnail={gestureThumbnail}
          title={"Gestural Code Editor"}
          link={"https://www.alineofco.de/"}
        />
        <WorkThumbNail
          thumbnail={perf_thumbnail}
          title={"JavaScript Performance Game"}
          link={"http://www.thebrickbreak.com/"}
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
