import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bulma/css/bulma.css";


class Change extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
      obj: [],
      inputfrom: '',
      inputby : '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputby = this.updateInputby.bind(this);

  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  updateInput(event){
    this.setState({inputfrom : event.target.value})
    }
  updateInputby(event){
        this.setState({inputby : event.target.value})
        }
    
    
    handleSubmit(){
    console.log('Your input from is: ' + this.state.inputfrom)
    this.setState(prevState => ({
        obj: [...prevState.obj, this.state.inputfrom+':' + this.state.inputby],
        inputby: '',
        inputfrom: ''
    }))
    //Send state to the server code
    }

  render() {
      const { obj, inputfrom , inputby} = this.state;
    return (
      <div
        className="modal is-active"
        style={{
          position: "absolute",
          top: "0%",
          fontSize: "8px",
          height: "33rem",
          width: "20%",
          marginLeft: "82%",
          marginRight: "18%",
          float: "left",
        }}
      >
        <button
          className="button is-normal"
          onClick={() => this.handleModalShowHide()}
        >
          Glossary
        </button>

      
        <Modal
          style={{
            position: "absolute",
            top: "3%",
            fontSize: "10px",
            height: "44rem",
            width: "20%",
            marginLeft: "78%",
            marginRight: "18%",
            marginTop: "1%",
            float: "top",
          }}
          show={this.state.showHide}
        >
          <Modal.Header>

            <div className="modal is-active is-small">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <h1 className="modal-card-title">Glossary</h1> <br/>
                  <h3 className="modal-card-title">Add your Dictionary</h3>
                  <button onClick={() => this.handleModalShowHide()} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    
                <strong>Replace: </strong> <input
                    className=""
                    type="text"
                    onChange={this.updateInput}
                    value = {inputfrom}
                    placeholder="ex. : Maler"
                  />{"  🔀  ⏩  🔀    "} <strong> By :</strong> <input
                  className=""
                  type="text"
                  value={inputby}
                  onChange={this.updateInputby}
                  placeholder="ex. : Artist"
                />
                <br/><br/>
                {
                     obj.map((ar, index) => (<div className= "box is-small"><p style = {{color: "#000814", fontSize:"15px"}}>{index + '.  ' + ar.split(':')[0] + '  ' + ' ⏩  ⏩ ' + ar.split(':')[1]}</p> </div>))
                    }
                </section>
                <footer className="modal-card-foot">
                  <button
                    className="button is-success "
                    onClick={this.handleSubmit}
                  >
                    Save
                  </button>
                
                  <button
                    onClick={() => this.handleModalShowHide()}
                    className="button is-danger is-outlined"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>
          </Modal.Header>
          
        </Modal>
      </div>
    );
  }
}

export default Change;
