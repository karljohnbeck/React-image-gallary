import React, { Component } from "react";


class GalleryItem extends Component {

    state = {
        isPicture: true
    }
    toggleState = () => {
        this.setState({
            isPicture: !this.state.isPicture
        })
    }


    render() {
        return (
            <div className="pictures">
                {this.state.isPicture ? <img className="imageDescription" onClick={this.toggleState}
                    src={this.props.galleryArt.path} />
                    : <div className="imageDescription" onClick={this.toggleState} >
                        <h5>{this.props.galleryArt.description}</h5>
                    </div>}
                <button className="btn btn-primary" onClick={() =>
                    this.props.smashThatLikeButton(this.props.galleryArt.id)} >Like This</button>

                <p>{this.props.galleryArt.likes} people like this!</p>

                <button className=" delete btn btn-danger btn-sm" onClick={() => 
                { this.props.imageDelete(this.props.galleryArt.id) }
                } >Delete</button>
            </div>
        )
    }
}

export default GalleryItem;