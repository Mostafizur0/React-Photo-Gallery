import React, { Component } from "react";

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            span: 0
        };

        this.imgRef = React.createRef();
    }

    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = props => {
        const height = this.imgRef.current.clientHeight;
        const span = Math.ceil(height/10);
        this.setState({ span: span });
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imgRef} alt={ description } src={ urls.regular } />
            </div>
        )
    }
}

export default ImageCard;
