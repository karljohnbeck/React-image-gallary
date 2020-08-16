import React, { Component } from "react";
import Axios from "axios";

class GalleryForm extends Component {

  state = {
    newEntry: {
      path: '',
      description: ''
    }
  }

  storePath = (event) => {
    this.setState({
      newEntry: {
        ...this.state.newEntry,
        path: event.target.value
      }
    });
    console.log(this.state.newEntry);

  }

  storeDescription = (event) => {
    this.setState({
      newEntry: {
        ...this.state.newEntry,
        description: event.target.value
      }
    });
    console.log(this.state.newEntry);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.newEntry)
    if (!this.state.newEntry.path || !this.state.newEntry.description) {
      alert('Please fill out all fields.')
    } else {
   
    this.props.addToGallery(this.state.newEntry)
    this.clearInputs();
    }
  }

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
          onChange={this.storeDescription} value={this.state.newEntry.description}/>

        </div>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default GalleryForm