import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class Gallery extends Component {
  render() {
    const gallery = this.props.gallery;
    return (
      <div>
        {gallery.map((e) => (
          <div key={e.id} className="gallery">
            <img src={`${e.url}`} alt={e.id} className="gallery-photo" />
          </div>
        ))}
        ;
      </div>
    );
  }
}
Gallery.propTypes = { gallery: PropTypes.array.isRequired };
export default Gallery;
