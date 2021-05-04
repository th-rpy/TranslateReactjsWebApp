/*import {
  Text,
  Input,
  Box,
  Select,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";
import Typewriter from "./TypeWriter";
import TextareaAutosize from "react-textarea-autosize";*/

import React from "react";
/*import { FormTextarea } from "shards-react";
import { FormSelect } from "shards-react";
import { Button } from "shards-react";*/
import "bulma/css/bulma.css";
import Parser from "./ParserComp";
import ReactDOM from "react-dom";

import { transform } from "./Transform.js";

class Input extends React.Component {
  componentDidUpdate(prevProps) {
    var node = ReactDOM.findDOMNode(this);
    var oldLength = node.value.length;
    var oldIdx = node.selectionStart;
    node.value = this.props.value;
    var newIdx = Math.max(0, node.value.length - oldLength + oldIdx);
    node.selectionStart = node.selectionEnd = newIdx;
  }

  render() {
    return <textarea {...this.props} value={undefined} />;
  }
}

var sampleCSS = `
      width: 5vh;
      height: 5vh;
      border-radius: 50%;
      background: #dfdfc2;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
      -webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
              animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

var initialStarterText = "";

export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTextTranslateChange = this.handleTextTranslateChange.bind(this);
    this.state = { value: null };
    this.state = { valueTr: null };
    this.state = { textOrg: "" };
    this.state = { translatedText: "" };
    this.state = { clicked: false };
    this.state = { disabled: true };
    this.update = this.update.bind(this);
    this.inputTextUpdate = this.inputTextUpdate.bind(this);

    this.state = {
      inputText: initialStarterText,
    };
  }

  componentDidMount() {
    // TODO: remove me...
    this.update();
  }

  inputTextUpdate(e) {
    this.setState(
      {
        inputText: e.target.value,
      },
      () => {
        this.update();
      }
    );
  }

  update() {
    console.log("update", arguments);

    if (this.state.inputText === initialStarterText) {
      this.setState({
        inputText: initialStarterText,
        error: null,
      });
      return;
    }

    try {
      var transformed = transform(this.state.inputText);

      var result = JSON.stringify(
        transformed,
        null,
        this.refs.useNewline.checked ? 2 : 0
      );
      this.setState({
        outputText: result,
        error: null,
      });
    } catch (ex) {
      this.setState({
        error: ex,
      });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value, textOrg: "", translatedText: "" });
    let bool = e.target.value == "CSS" ? false : true;
    this.setState({ disabled: bool });
  }
  handleChange2(e) {
    this.setState({ valueTr: e.target.value, translatedText: "" });
  }

  handleTextTranslateChange(e) {
    this.setState({ textOrg: e.target.value });
  }

  handleClick() {
    // eslint-disable-next-line no-unused-expressions
    this.state.value == null || this.state.valueTr == null
      ? this.setState({ clicked: false })
      : null;
    this.state.value === this.state.valueTr
      ? this.setState({ translatedText: this.state.textOrg, clicked: true })
      : this.setState({ clicked: true });
    let languageObj = {
      English: "en",
      French: "fr",
      Arabic: "ar",
      Espanol: "es",
    };
    const response = fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: this.state.textOrg,
        source: languageObj[this.state.value],
        target: languageObj[this.state.valueTr],
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => this.setState({ translatedText: res.translatedText }));
  }

  render() {
    const { value, valueTr, textOrg, translatedText, disabled } = this.state;
    const color_ = value && valueTr ? "green" : "red";

    console.log("state", this.state);
    var inputText = this.state.inputText;
    var outputText = this.state.error || this.state.outputText;

    return (
      <div>
        <h3 className="mb-2" style={{ color: color_ }}>
          {value && valueTr
            ? "From : " +
              (value && `🗣 ${value}`) +
              " To : " +
              (valueTr && `🗣 ${valueTr}`)
            : "🤔 Waiting for you to say something..."}
        </h3>
        <br /> <br />
        <div style={{ height: "50em", width: "100%", margin: "auto" }}>
          {value ? (
            <div
              style={{
                height: "30rem",
                width: "20%",
                marginLeft: "5%",
                marginRight: "0%",
                float: "left",
              }}
            >
              <textarea
                style={{
                  overflow: "hidden",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
                id="edd-reviews-review"
                name="edd-reviews-review"
                rows="12"
                cols="60"
                aria-required="true"
                required="required"
                onChange={
                  value != "CSS"
                    ? this.handleTextTranslateChange
                    : this.inputTextUpdate
                }
                value={value != "CSS" ? textOrg : inputText}
                placeholder={
                  "Here, Type Your " + value + " Text To Translate ..."
                }
              ></textarea>{" "}
            </div>
          ) : (
            <div
              style={{
                height: "30rem",
                width: "20%",
                marginLeft: "5%",
                marginRight: "0%",
                float: "left",
              }}
            >
              <br />
              <br /> <br />
              <br />
              <button className="delete"> </button>
              <span className="icon has-text-info">
                <i className="fas fa-info-circle"></i>
              </span>
              <strong>Your Text ...</strong>
            </div>
          )}

          <div
            style={{
              width: "50x",
              height: "100px",

              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",

              margin: "auto",
            }}
          >
            <div className="select is-primary is-small">
              <select className="select" onChange={this.handleChange}>
                <option value="Select Language">Translate from...</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
                <option value="Espanol">Espanol</option>
                <option value="CSS">CSS</option>
              </select>
            </div>
            <strong>{"👈__👀__👉"}</strong>
            <div className="select is-primary is-small">
              <select onChange={this.handleChange2} className="select">
                <option value="default">Translate into...</option>
                <option value="English" disabled={false}>
                  English
                </option>
                <option value="French" disabled={false}>
                  French
                </option>
                <option value="Arabic" disabled={false}>
                  Arabic
                </option>
                <option value="Espanol" disabled={false}>
                  Español
                </option>
                <option value="React" disabled={disabled}>
                  React
                </option>
              </select>
            </div>
          </div>
          <div
            style={{
              width: "50x",
              height: "25px",

              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",

              margin: "auto",
            }}
          >
            {value != "CSS" && valueTr != "React" ? (
              <button
                className="button is-primary is-outlined"
                onClick={this.handleClick}
              >
                Translate
              </button>
            ) : (
              <strong style={{ fontSize: "18px", color: "red" }}>
                Convert in Real Time
              </strong>
            )}
          </div>

          {valueTr ? (
            <div
              style={{
                height: "50rem",
                width: "20%",
                marginLeft: "0%",
                marginRight: "18%",
                float: "right",
              }}
            >
              <textarea
                style={{
                  overflow: "hidden",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
                id="edd-reviews-review"
                name="edd-reviews-review"
                cols="60"
                rows="12"
                aria-required="true"
                required="required"
                // eslint-disable-next-line eqeqeq
                value={
                  value != "CSS" && valueTr != "React"
                    ? translatedText
                    : outputText
                }
                placeholder={"Here, You get Your Text in " + valueTr}
              ></textarea>{" "}
              {value == "CSS" && valueTr == "React" ? (
                <div>
                  <label className="checkbox">
                    <input
                      style={{ marginLeft: "12px" }}
                      aria-label="Format"
                      ref="useNewline"
                      alt="Formats the react JSON below."
                      type="checkbox"
                      onChange={this.update}
                    />
                    <span style={{ marginRight: "10px" }}>Format</span>
                  </label>{" "}
                  <button
                    onClick={() => {
                      value != "CSS" && valueTr != "React"
                        ? navigator.clipboard.writeText(
                            this.state.translatedText
                          )
                        : navigator.clipboard.writeText(this.state.outputText);
                    }}
                    className="button is-light"
                  >
                    Copy
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    value != "CSS" && valueTr != "React"
                      ? navigator.clipboard.writeText(this.state.translatedText)
                      : navigator.clipboard.writeText(this.state.outputText);
                  }}
                  className="button is-light"
                >
                  Copy
                </button>
              )}
              <br />
            </div>
          ) : (
            <div
              style={{
                height: "50rem",
                width: "12%",
                marginLeft: "1%",
                marginRight: "15%",
                float: "right",
              }}
            >
              <br />
              <br /> <br />
              <br />
              <button className="delete"> </button>
              <span className="icon has-text-info">
                <i className="fas fa-info-circle"></i>
              </span>
              <strong> Translated Text.</strong>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "38%",
              right: "38%",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            <article className="message is-info">
              <div className="message-body">
                {
                  "This simple little tool is intended to help translate plain CSS into the React in-line style specific JSON representation. Making it easy to copy and paste into an inline React component."
                }
                <ul>
                  <li>
                    <strong>1. </strong>Select the Target and source Language,
                  </li>
                  <li>
                    <strong>2. </strong>Paste the Original Text,
                  </li>
                  <li>
                    <strong>3. </strong>Click to Translate Button,
                  </li>
                  <li>
                    <strong>4. </strong>Copy the translated Text,
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
