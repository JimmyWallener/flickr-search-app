import React, { Component } from "react";
import Header from "./Header";
import Photo from "./Photo";
import Axios from "axios";

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
  removeFromGallery = (id) => {
    console.log(id);
    this.setState({
      gallery: [...this.state.gallery.filter((img) => img.id !== id)],
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          searchApi={this.searchApi}
          gallery={this.state.gallery}
          removeFromGallery={this.removeFromGallery}
        />
        <Photo photos={this.state.photos} addToGallery={this.addToGallery} />
      </div>
    );
  }
}

export default App;
