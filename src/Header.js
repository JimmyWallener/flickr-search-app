import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import gallery from "./gallery.png";
//import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    keyword: "",
  };

  handleQuery = (ev) => {
    this.setState({ keyword: ev.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const keyword = this.state.keyword;
    this.props.searchApi(keyword);
    this.setState({
      keyword: "",
    });
  };
  onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const keyword = this.state.keyword;
      this.props.searchApi(keyword);
      this.setState({
        keyword: "",
      });
    }
  };

  render() {
    return (
      <div className="header">
        <header>
          <h1>Flickr App</h1>
          <input
            onChange={this.handleQuery}
            onKeyDown={this.onKeyPress}
            value={this.state.keyword}
            type="text"
            className="search"
            placeholder="Search photos..."
          ></input>
          <button onClick={this.handleSubmit} type="submit">
            Search
          </button>

          <div className="tooltip">
            <img className="gallery-btn" src={gallery} alt="gallery"></img>
            <span>Show Gallery</span>
          </div>
        </header>
      </div>
    );
  }
}
Header.propTypes = {
  searchApi: PropTypes.func.isRequired,
};
