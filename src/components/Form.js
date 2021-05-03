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
    // eslint-disable-next-line no-unused-expressions
    this.state.value === null || this.state.valueTr === null ? alert('juju') : null;
    this.state.value === this.state.valueTr
      ? this.setState({ translatedText: this.state.textOrg, clicked: true })
      : this.setState({ translatedText: "Bonjour mes amis !", clicked: true });
    fetch(
      "https://website-translation1.p.rapidapi.com/translateLanguage/translate?type=plain&text=Marketing%20is%20the%20study%20and%20management%20of%20exchange%20relationships.%20It%20is%20the%20business%20process%20of%20identifying%2C%20anticipating%2C%20and%20satisfying%20customers'%20needs%20and%20wants.%20Because%20marketing%20is%20used%20to%20attract%20customers%2C%20it%20is%20one%20of%20the%20primary%20components%20of%20business%20management%20and%20commerce.&target=fr",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "80931fe5ddmsh53d7fcecf915bb4p18ea7bjsna3109b19b574",
          "x-rapidapi-host": "website-translation1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        console.log(response.json());
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { value, valueTr, textOrg, translatedText, clicked } = this.state;
    const color_ = value && valueTr ? "green" : "red";
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
        <br />
        <div style={{ height: "50rem", width: "100%", margin: "auto" }}>
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
              rows="15"
              cols="60"
              aria-required="true"
              required="required"
              value={textOrg}
              onChange={this.handleTextTranslateChange}
              placeholder="Type To Translate ..."
            ></textarea>{" "}
          </div>

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
            <div class="select is-primary is-small">
              <select class="select" onChange={this.handleChange}>
                <option value="Select Language">Translate from...</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
            <strong>{"👈__👀__👉"}</strong>
            <div class="select is-primary is-small">
              <select onChange={this.handleChange2} class="select">
                <option value="Select Language">Translate into...</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
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
            <button
              class="button is-primary is-outlined"
              onClick={this.handleClick}
            >
              Translate
            </button>
          </div>

          {clicked ? (
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
                rows="15"
                aria-required="true"
                required="required"
                value={translatedText}
                placeholder="Here, Your translated Text..."
              ></textarea>{" "}
              <br />{" "}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(this.state.translatedText);
                }}
                class="button is-light"
              >
                Copy
              </button>
            </div>
          ) : (
            <div
              style={{
                height: "50rem",
                width: "20%",
                marginLeft: "0%",
                marginRight: "14%",
                float: "right",
              }}
            >
              <br />
              <br /> <br />
              <br />
              <button class="delete"> </button>
              <span class="icon has-text-info">
                <i class="fas fa-info-circle"></i>
              </span>
              <strong>Here You Gotta Your Translated Text ...</strong>
            </div>
          )}
        </div>
      </div>
    );
  }
}
