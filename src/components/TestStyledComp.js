import { Component } from "react";
import "bulma/css/bulma.css";

class TestComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="modal is-active"
        style={{
          position: "absolute",
          top: "35%",
          fontSize: "10px",
          height: "49rem",
          width: "20%",
          marginLeft: "78%",
          marginRight: "18%",
          float: "left",color: "blue"
        }}
      >
        <div className="card">
          <header className="card-header">
            <p className="card-header-title"> Test Component</p>
          </header>
          <div className="card-content">
            <strong style={this.props.style}>
              React is one of the most popular JavaScript frameworks ever
              created, and I believe that it's one of the best tools out there..
            </strong>
            <p>S. Thamer</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <a href="#">Edit</a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>
                <a href="#">Copy</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default TestComp;
