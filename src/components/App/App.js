import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx'

class App extends Component {

  state = {
    galleryList: [],
  }

  componentDidMount() {
    console.log('Je Suis Monte!');
    this.getGalleryList()

  }

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

  smashThatLikeButton = (id) => {
    console.log('wahoooooooooo', id)
    Axios.put(`/gallery/like/${id}`)
    .then(response => {
      this.getGalleryList()
    }).catch(error => {
      console.log(error)
    })
  }

  addToGallery = (newEntry) => {
    console.log(newEntry)
    Axios.post('/gallery', newEntry)
    .then(response => {
      this.getGalleryList()
    }).catch(error => {
      console.log(error)
    })
  }
    
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        
        <GalleryForm addToGallery={this.addToGallery}/>
        <p>Gallery goes here</p>
        <GalleryList 
        smashThatLikeButton={this.smashThatLikeButton}
        galleryList={this.state.galleryList}
        imageDelete={this.imageDelete} />

      </div>
    )
  }
}

export default App;
