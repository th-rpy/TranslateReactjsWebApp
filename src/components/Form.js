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

export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state = { value: null };
    this.state = { valueTr: null };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleChange2(e) {
    this.setState({ valueTr: e.target.value });
  }

  render() {
    const { value, valueTr } = this.state;
    return (
      <div>
        <p className="mb-2">
          {value && valueTr
            ? "From : " +
              (value && `🗣 ${value}`) +
              " To : " +
              (valueTr && `🗣 ${valueTr}`)
            : "🤔 Waiting for you to say something..."}
        </p>
        <row>
          <textarea
            id="edd-reviews-review"
            name="edd-reviews-review"
            cols="45"
            rows="8"
            aria-required="true"
            required="required"
          ></textarea>

          <select onChange={this.handleChange}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
          </select>
          {"👈👉"}
          <select onChange={this.handleChange2}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
          </select>

          <textarea
            id="edd-reviews-review"
            name="edd-reviews-review"
            cols="45"
            rows="8"
            aria-required="true"
            required="required"
          ></textarea>
        </row>
      </div>
    );
  }
}
