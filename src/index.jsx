import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Q, W, E, A, S, D, Z, X, C } from "./samples";

// DRUMPAD CLASS
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.playClip = this.playClip.bind(this);
  }

  playClip() {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.keyPressed == this.props.id) {
      this.playClip();
    }
    return nextProps.keyPressed == "q";
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onMouseDown={this.playClip}>
        {this.props.id}
        <audio ref={this.audio} className="clip">
          <source src={this.props.audio} />
        </audio>
      </div>
    );
  }
}

//MASTER MACHINE CLASS
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
    const key = e.key.toLowerCase();
    this.setState({ keyPressed: key });
    console.log(this.state.keyPressed);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {sources.map((e) => (
          <DrumPad
            keyPressed={this.state.keyPressed}
            id={e.id}
            audio={e.audio}
          />
        ))}
      </div>
    );
  }
}

//AUDIO SOURCES
const sources = [
  { id: "q", audio: Q },
  { id: "w", audio: W },
  { id: "e", audio: E },
  { id: "a", audio: A },
  { id: "s", audio: S },
  { id: "d", audio: D },
  { id: "z", audio: Z },
  { id: "x", audio: X },
  { id: "c", audio: C },
];

// ========================================

ReactDOM.render(<Machine />, document.getElementById("root"));
