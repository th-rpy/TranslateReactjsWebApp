/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bulma/css/bulma.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav
          className="navbar is-white"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              {" "}
              <span className="tag is-info is-large">Translate App</span>{" "}
            </a>

            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
         
          
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary is-outlined">
                  <span>Sign up</span>
                </button>
                <button className="button is-primary is-outlined" type="submit">
                  Log in
                </button>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              
  <button className="button is-primary">
    <span className="icon">
      <i className="fab fa-twitter"></i>
    </span>
    <span>@GitHub</span>
  </button>
              </div>
            </div>

        </nav>
      </div>
    );
  }
}

export default Navbar;
