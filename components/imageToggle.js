import React, { Component } from 'react';

class ImageToggle extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: true,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return(
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
        {
          this.state.isHovering ?
          // <p>hello</p>
          <img src={ this.props.maskedImage } alt="Portrait of celine" style={{ width: '100%' }}/>:
          <img src={ this.props.image } alt="Portrait of celine" style={{ width: '100%' }}/>
        }
      </div>
    )
  }

};

export default ImageToggle;