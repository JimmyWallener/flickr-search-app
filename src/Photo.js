import React, { Component } from "react";

import "./App.css";
import PropTypes from "prop-types";

class Photo extends Component {
  render() {
    const photos = this.props.photos;

    return (
      <div className="photo-wrapper">
        {photos.map((e) => (
          <div key={e.id} className="photo-container">
            <img
              src={`https://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${e.secret}_z.png`}
              alt={e.title}
              onClick={this.props.addToGallery.bind(
                this,
                e.farm,
                e.server,
                e.id,
                e.secret
              )}
            />
          </div>
        ))}
      </div>
    );
  }
}
Photo.propTypes = {
  photos: PropTypes.array.isRequired,
  addToGallery: PropTypes.func.isRequired,
};
export default Photo;
