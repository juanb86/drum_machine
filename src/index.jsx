import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
        <div>
          <div className="drum-pad" id="kick" onClick="">
            Q<audio className="clip" id="Q" src="" ></audio>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Machine />, document.getElementById("root"));
