import React from 'react';
import debounce from '../debounce';

// import { throws } from 'assert';

class ImageCard extends React.Component {
  state = { spans: 0 }

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.span = 0;
  }

  setSpans = () => {
    let height = this.imageRef.current.clientHeight;
    let spans = Math.ceil(height / 10 + 1);
    this.setState({ spans })
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans());
    // window.addEventListener('resize', this.setSpans);

    // console.log(this.imageRef.current.clientHeight);

  }

  render() {
    const { image, description } = this.props
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={ this.imageRef }
          src={ image }
          alt={ description }
          // style={{width: '100%'}}
        />
      </div>
    )
  }
}

export default ImageCard;