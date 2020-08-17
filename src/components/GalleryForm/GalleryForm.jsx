import React, { Component } from "react";
import Axios from "axios";

class GalleryForm extends Component {

  // state used to store input field values
  state = {
    newEntry: {
      path: '',
      description: ''
    }
  }

  // save the path input
  storePath = (event) => {
    this.setState({
      newEntry: {
        ...this.state.newEntry,
        path: event.target.value
      }
    });
    console.log(this.state.newEntry);
  }

  // save the description input
  storeDescription = (event) => {
    this.setState({
      newEntry: {
        ...this.state.newEntry,
        description: event.target.value
      }
    });
    console.log(this.state.newEntry);
  }

  // add the newEntry to the DOM
  handleSubmit = (event) => {
    // stop page refresh
    event.preventDefault();
    console.log(this.state.newEntry)
    // if block to make sure all input fields are filled out 
    if (!this.state.newEntry.path || !this.state.newEntry.description) {
      alert('Please fill out all fields.')
    } else {
      // if filled out, run the post function in app.js with the newEntry data plugged in
      this.props.addToGallery(this.state.newEntry)
      // clear inputs fields
      this.clearInputs();
    }
  }

  // clear inputs fields cont.
  clearInputs = () => {
    this.setState({
      newEntry: {
        path: '',
        description: ''
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add new entries to the gallery:</h4>
        <div className="form-group">
          <label for="imagePath">Image Path</label>
          <input className="form-control" id="imagePath" placeholder="images/gracie.jpg"
            onChange={this.storePath} value={this.state.newEntry.path} />
        </div>
        <div className="form-group">
          <label for="imagePath">Image Description</label>
          <input className="form-control" id="imageDescription" placeholder="This is my cat!"
            onChange={this.storeDescription} value={this.state.newEntry.description} />

        </div>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default GalleryForm