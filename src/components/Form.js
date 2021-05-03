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
import 'bulma/css/bulma.css'


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
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleChange2(e) {
    this.setState({ valueTr: e.target.value });
  }

  handleTextTranslateChange(e) {
    this.setState({ textOrg: e.target.value });
  }

  handleClick() {
    this.setState({ translatedText: this.state.textOrg });
    fetch("https://website-translation1.p.rapidapi.com/translateLanguage/translate?type=plain&text=Marketing%20is%20the%20study%20and%20management%20of%20exchange%20relationships.%20It%20is%20the%20business%20process%20of%20identifying%2C%20anticipating%2C%20and%20satisfying%20customers'%20needs%20and%20wants.%20Because%20marketing%20is%20used%20to%20attract%20customers%2C%20it%20is%20one%20of%20the%20primary%20components%20of%20business%20management%20and%20commerce.&target=fr", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "80931fe5ddmsh53d7fcecf915bb4p18ea7bjsna3109b19b574",
        "x-rapidapi-host": "website-translation1.p.rapidapi.com"
      }
    })
    .then(response => {
      console.log(response.json());
    })
    .catch(err => {
      console.error(err);
    });
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
             style = {{  overflow:'hidden',
             fontSize:"18px",
             borderRadius:'10px',}}
            id="edd-reviews-review"
            name="edd-reviews-review"
            rows="9"
            cols = '70'
            aria-required="true"
            required="required"
            value={textOrg}
            onChange={this.handleTextTranslateChange}
            placeholder="Type To Translate ..."
          ></textarea>
          <br/>
          <div>
              <div class="select is-primary is-small">
                  <select
                  class = "select"
                    onChange={this.handleChange}
                    
                  >
              <option value="Select Language">Translate from...</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Arabic">Arabic</option>
            </select>
            </div>
            <span>{"👈__👀__👉"}</span>
            <div class="select is-primary is-small">
            <select
              onChange={this.handleChange2}
              class = "select"
            >
              <option value="Select Language">Translate into...</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Arabic">Arabic</option>
            </select>
            </div>
          </div>
          <div>
            <button
              class = "button is-primary is-outlined"
              onClick={this.handleClick}
            >
              Translate
            </button>
            <br /> 

          </div>
          <textarea
          style = {{  overflow:'hidden',
            fontSize:"18px",
            borderRadius:'10px',}}
            id="edd-reviews-review"
            name="edd-reviews-review"
            cols="70"
            rows="9"
            aria-required="true"
            required="required"
            value={translatedText}
            placeholder="Here, Your translated Text..."
          ></textarea>
        </div>
      </div>
    );
  }
}
