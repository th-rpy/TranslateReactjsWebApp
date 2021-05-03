import {
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
import TextareaAutosize from "react-textarea-autosize";

import React from "react";
import { FormTextarea } from "shards-react";
import { FormSelect } from "shards-react";
import { Button } from "shards-react";

export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTextTranslateChange = this.handleTextTranslateChange.bind(this);
    this.state = { value: null };
    this.state = { valueTr: null };
    this.state = {textOrg: ''};
    this.state = {translatedText : ''}
    this.state = {clicked: false};
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleChange2(e) {
    this.setState({ valueTr: e.target.value });
  }

  handleTextTranslateChange(e) {
    this.setState({ textOrg : e.target.value})
  }

  handleClick() {
    this.setState({ translatedText: this.state.textOrg })
    console.log(this.state.translatedText);
  }

  render() {
    const { value, valueTr, textOrg, translatedText } = this.state;

    return (
      <div>
        <h4 className="mb-2" style={{ color: "green" }}>
          {value && valueTr
            ? "From : " +
              (value && `🗣 ${value}`) +
              " To : " +
              (valueTr && `🗣 ${valueTr}`)
            : "🤔 Waiting for you to say something..."}
        </h4>
        <div>
          <textarea
            id="edd-reviews-review"
            name="edd-reviews-review"
            cols="60"
            rows="10"
            aria-required="true"
            required="required"
            value = {textOrg}
            onChange={this.handleTextTranslateChange}
            placeholder = 'Type To Translate ...'
          ></textarea>
          <div>
            <select
              onChange={this.handleChange}
              style={{
                cursor: "pointer",
                display: "inlineBlock",
                position: "relative",
                font: "normal 18px Arial, Sans-Serif",
                color: "black",
                border: "1px solid #ccc",
              }}
            >
              <option value="Select Language">Translate from...</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Arabic">Arabic</option>
            </select>
            <h8>{"👈__👀__👉"}</h8>
            <select onChange={this.handleChange2} style={{
                cursor: "pointer",
                display: "inlineBlock",
                position: "relative",
                font: "normal 18px Arial, Sans-Serif",
                color: "black",
                border: "1px solid #ccc",
              }}>
              <option value="Select Language">Translate into...</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
          <div>
            <button
              style={{
                border: "2px solid #4CAF50",
                color: "green",
                padding: "10px 35px",
                textAlign: "center",
                textDecoration: "none",
                display: "inlineBlock",
                fontSize: "14px",
                margin: "2px 2px",
                transitionDuration: "0.4s",
                cursor: "pointer",
              }}
              onClick = {this.handleClick}
            >
              Translate
            </button>
            <br />
          </div>
          <textarea
            id="edd-reviews-review"
            name="edd-reviews-review"
            cols="60"
            rows="10"
            aria-required="true"
            required="required"
            value = {translatedText}
            placeholder="Here, Your translated Text..."
          ></textarea>
        </div>
      </div>
    );
  }
}
