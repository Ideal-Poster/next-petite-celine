import React from 'react';

class ImageCard extends React.Component {
  state = { spans: 0 }

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil((height / 10) + 1);
    this.setState({ spans })
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load',this.setSpans());

    setTimeout(() => {
      this.imageRef.current.addEventListener('load',this.setSpans());
    }, 400);

    // this.addEventListener('load')
  }

  render() {
    const { image, description } = this.props
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={ this.imageRef }
          src={ image }
          alt={ description }
        />
      </div>
    )
  }
}

export default ImageCard;