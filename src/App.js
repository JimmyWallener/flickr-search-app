import React, { Component, Fragment } from "react";
import Header from "./Header";
import Photo from "./Photo";
import Gallery from "./Gallery";
import Axios from "axios";

import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = {
    photos: [],
    gallery: [],
  };

  searchApi = (keyword) => {
    console.log(keyword);
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=041cf6fd538069e649776a03ac7b5ec2&text=${keyword}&sort=&format=json&nojsoncallback=1`;
    Axios.get(url)
      .then((res) => {
        this.setState({ photos: res.data.photos.photo });
      })
      .catch((error) => {
        alert("Something went wrong: " + error.message);
      });
  };
  addToGallery = (farm, server, userid, secret) => {
    const uri = `https://farm${farm}.staticflickr.com/${server}/${userid}_${secret}_z.png`;
    const newObject = { id: userid, url: uri };
    this.setState({ gallery: [...this.state.gallery, newObject] });
  };
  removeFromGallery = (id) => {};

  render() {
    return (
      <div className="container">
        <Router>
          <Header searchApi={this.searchApi} />

          <Route />
          <Fragment>
            <div>
              <Photo
                photos={this.state.photos}
                addToGallery={this.addToGallery}
              />
              <Gallery gallery={this.state.gallery} />
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
