import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Q, W, E, A, S, D, Z, X, C } from "./samples";

// DRUMPAD CLASS
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.clickPlay = this.clickPlay.bind(this);
    this.keyPlay = this.keyPlay.bind(this);
  }

  clickPlay() {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
    this.props.handleClick(this.props.id);
  }

  keyPlay() {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
  }

  componentDidUpdate() {
    console.log(this.props.id + " updated!!!");
    this.keyPlay();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.keyPressed === this.props.id;
  }

  render() {
    const currentId = this.props.id;
    return (
      <div className="drum-pad" id={currentId} onMouseDown={this.clickPlay}>
        {currentId.toUpperCase()}
        <audio
          ref={this.audio}
          className="clip"
          src={this.props.audio}
          id={currentId.toUpperCase()}
        />
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
      display: "q",
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  onKeyDown(e) {
    const key = e.key.toLowerCase();
    this.setState({ keyPressed: key, display: key });
  }

  handleClick(e) {
    this.setState({ display: e });
  }

  render() {
    const displayObj = sources.filter((e) => e.id == this.state.display);
    const displayText = displayObj[0].name;
    return (
      <div id="drum-machine">
        <h1 id="title">DRUM MACHINE</h1>
        <div id="drum-container">
          <div id="pads">
            {sources.map((e) => (
              <DrumPad
                keyPressed={this.state.keyPressed}
                id={e.id}
                audio={e.audio}
                handleClick={this.handleClick}
              />
            ))}
          </div>
          <div id="display-container">
            <h3>Current Sample</h3>
            <div id="display">{displayText}</div>
          </div>
        </div>
      </div>
    );
  }
}

//AUDIO SOURCES
const sources = [
  { id: "q", name: "Kick Drum 1", audio: Q },
  { id: "w", name: "Kick Drum 2", audio: W },
  { id: "e", name: "Kick Drum 3", audio: E },
  { id: "a", name: "Snare 1", audio: A },
  { id: "s", name: "Snare 2", audio: S },
  { id: "d", name: "Snare 3", audio: D },
  { id: "z", name: "High Hat", audio: Z },
  { id: "x", name: "High Hat Big", audio: X },
  { id: "c", name: "High Hat Small", audio: C },
];

// ========================================

ReactDOM.render(<Machine />, document.getElementById("root"));
