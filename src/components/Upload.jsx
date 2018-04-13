import React, { Component } from "react";

import store from "../redux/store"
import { postImg } from "../redux/actions";
import Arrow from './arrow.svg';

export default class Upload extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
    store.dispatch(postImg(evt));
  }

  render() {
    return (
      <form encType="multipart/form-data" method="post" id="upload-form">
        <label className="file-upload" htmlFor="file-upload">
        <Arrow fill="pink" />
        </label>
        <input onChange={this.handleChange.bind(this)} type="file" id="file-upload" name="file-upload" className="file-upload-input" multiple="" />
    </form>
    );
  }
}