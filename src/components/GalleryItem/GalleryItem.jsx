import React, { Component } from "react";


class GalleryItem extends Component {
    render() {
        return (
            <div>
            <img src={this.props.galleryArt.path}/>
            <button>Is goot</button>
        <p>{this.props.galleryArt.likes} people like this!</p>
            </div>
        )
    }
}

export default GalleryItem;