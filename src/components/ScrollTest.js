import React, { Component, Fragment } from "react";
import ScrollTrigger from "react-scroll-trigger";

export default class ScrollTest extends Component {
  state = {
    visible: false
  };
  onEnterViewport = () => {
    this.setState({
      visible: true
    });
  };

  onExitViewport = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <Fragment>
        <div style={{ height: "1000px", backgroundColor: "blue" }}>TESt</div>

        <div
          className="green"
          style={{ height: "600px", backgroundColor: "green" }}
        >
          {" "}
          <ScrollTrigger
            onEnter={this.onEnterViewport}
            onExit={this.onExitViewport}
          >
            <div className={`greeting ${visible ? "greeting-animate" : ""}`}>
              Zoom in.
            </div>
          </ScrollTrigger>
        </div>
        <div style={{ height: "1000px", backgroundColor: "red" }}>TESt</div>
        <ScrollTrigger
          onEnter={this.onEnterViewport}
          onExit={this.onExitViewport}
        >
          <div className={`yellow ${visible ? "container-animate" : ""}`}>
            Heeloooo!
          </div>
        </ScrollTrigger>
      </Fragment>
    );
  }
}
