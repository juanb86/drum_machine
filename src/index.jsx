import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Q from "./cosmo_short_Bmaj9.wav";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.audio = React.createRef();
    this.playClip = this.playClip.bind(this);
  }

  playClip() {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.keyPressed == "q") {
      this.playClip();
    }
    return nextProps.keyPressed == "q";
  }

  render() {
    const id = "Q";
    return (
      <div className="drum-pad" id={id} onMouseDown={this.playClip}>
        Q{" "}
        <audio ref={this.audio} className="clip" id={id}>
          <source src={Q} />
        </audio>
      </div>
    );
  }
}

class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: "asd",
    };
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  onKeyDown(e) {
    this.setState({ keyPressed: e.key });
    console.log(this.state.keyPressed);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        <DrumPad keyPressed={this.state.keyPressed} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Machine />, document.getElementById("root"));
