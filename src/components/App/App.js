import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx'
import './library/bootstrap.css'

class App extends Component {

// the list of image data
  state = {
    galleryList: [],
  }

  // on page load
  componentDidMount() {
    console.log('Je Suis Monte!');
    this.getGalleryList()
  }

  // axios, get the image data fro mthe database and store it in galleryList
  getGalleryList = () => {
    Axios.get('/gallery')
      .then((galleryItems) => {
        console.log(galleryItems.data)
        this.setState({
          galleryList: galleryItems.data
        })
        console.log(this.state.galleryList)
      }).catch((error) => {
        console.log(error)
      })
  }

 // whenever you like a image, axios, go and add 1 to the count
  smashThatLikeButton = (id) => {
    console.log('wahoooooooooo', id)
    Axios.put(`/gallery/like/${id}`)
    .then(response => {
      this.getGalleryList()
    }).catch(error => {
      console.log(error)
    })
  }

  // axios, put the new image on the database
  // newEntry comes GalleryForm
  addToGallery = (newEntry) => {
    console.log(newEntry)
    Axios.post('/gallery', newEntry)
    .then(response => {
      this.getGalleryList()
    }).catch(error => {
      console.log(error)
    })
  }
    
  // delete the imiage you clicked on
    imageDelete = (id) => {
      console.log('wahoooooooooo', id)
      Axios.delete(`/gallery/${id}`)
      .then(response => {
        this.getGalleryList()
      }).catch(error => {
        console.log(error)
      })
    };


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        
        <GalleryForm addToGallery={this.addToGallery}/>
        
        <h4>Gallery Display</h4>
        <GalleryList 
        smashThatLikeButton={this.smashThatLikeButton}
        galleryList={this.state.galleryList}
        imageDelete={this.imageDelete} />

      </div>
    )
  }
}

export default App;
