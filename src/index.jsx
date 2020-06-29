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
    this.audio.current.play();
  }

  render() {
    const id = "Q";
    return (
      <div className="drum-pad" id={id} onClick={this.playClip}>
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
      asd: "asd",
    };
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        <DrumPad />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Machine />, document.getElementById("root"));
