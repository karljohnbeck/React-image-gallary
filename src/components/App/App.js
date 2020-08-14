import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

class App extends Component {

  state = {
    galleryList: []
  }

  componentDidMount() {
    console.log('wipee');
    this.getGalleryList()
    
  }

  getGalleryList = () => {
    Axios.get('/gallery')
    .then((galleryItems) => {
      console.log('hmmm')
      this.setState({
        galleryList: galleryItems.data
      })
      console.log(this.state.galleryList)
    }) .catch((error) => {
      console.log(error)
    })
    
    }

  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
      
        <p>Gallery goes here</p>
        <GalleryList galleryList={this.state.galleryList}/>
        
      </div>
    );
  }
}

export default App;
