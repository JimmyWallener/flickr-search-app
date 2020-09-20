import React, { Component } from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import "./App.css";

export default class Header extends Component {
  state = {
    keyword: "",
    active: false,
  };

  // Sets the keyword in state
  handleQuery = (ev) => {
    this.setState({ keyword: ev.target.value });
  };
  // forwards the keyword to function searchAPI when submit is entered
  handleSubmit = (e) => {
    e.preventDefault();
    const keyword = this.state.keyword;
    this.props.searchApi(keyword);
    this.setState({
      keyword: "",
    });
  };
  // Will do the same as above, but if you press enter
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
    const gallery = this.props.gallery;
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
        </header>
        {/* Creates a Pop-up for our images */}
        <Popup
          trigger={<button className="gallery-btn"> Open Gallery</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header">Gallery Photos</div>
              <div className="content">
                {" "}
                {gallery.map((e) => (
                  <div key={e.id} className="photo-container">
                    <img
                      src={`${e.url}`}
                      alt={e.id}
                      className="gallery-photo"
                      onClick={this.props.removeFromGallery.bind(this, e.id)}
                    />
                  </div>
                ))}
              </div>
              <div className="actions">
                <Popup>
                  {" "}
                  <button
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    Close Gallery
                  </button>
                </Popup>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}
Header.propTypes = {
  searchApi: PropTypes.func.isRequired,
  removeFromGallery: PropTypes.func.isRequired,
  gallery: PropTypes.array.isRequired,
};
