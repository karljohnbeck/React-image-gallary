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
        this.props.addToGallery(this.state.newEntry)
      }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <input placeholder="Image Path" onChange={this.storePath} value={this.state.newEntry.path}/>
            <input placeholder="Image Description" onChange={this.storeDescription}/>
            <input type="submit" value="submit" />
        </form>
        )
    }
}

export default GalleryForm