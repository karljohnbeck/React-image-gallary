import React, { Component } from "react";


class GalleryItem extends Component {

    state = {
        isPicture: true
    }
    // lets the current picture go between text and image base on a boolean 
    toggleState = () => {
        this.setState({
            isPicture: !this.state.isPicture
        })
    }


    render() {
        return (
            <div className="pictures">
                {/* this is a line that if this.isPicture is true will show the picture
                and if false show the text instead */}
                {this.state.isPicture ? <img className="imageDescription" onClick={this.toggleState}
                    src={this.props.galleryArt.path} />
                    : <div className="imageDescription" onClick={this.toggleState} >
                        <h5>{this.props.galleryArt.description}</h5>
                    </div>}
                {/* like button, calls function on app.js */}
                <button className="btn btn-primary" onClick={() =>
                    this.props.smashThatLikeButton(this.props.galleryArt.id)} >Like This</button>
                {/* display like count */}
                <p>{this.props.galleryArt.likes} people like this!</p>
                {/* delete button for image */}
                <button className=" delete btn btn-danger btn-sm" onClick={() => { this.props.imageDelete(this.props.galleryArt.id) }
                } >Delete</button>
            </div>
        )
    }
}

export default GalleryItem;