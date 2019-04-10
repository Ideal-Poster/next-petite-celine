import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { Col } from 'antd';

import photos from '../api';
import NavMenu from '../components/navMenu';
import ImageCard from '../components/imageCard';

// const ImageCard = dynamic(() => import('../components/imageCard'));
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft, faChevronRight);

class ArtPage extends Component {

  state = {
    currentImage: 0,
    lightboxIsOpen: false,

  }

  constructor(props) {
    super(props);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.imageList = React.createRef();
  }

  openLightbox(index) {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
    console.log(index);

  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  goToPrev() {
    if (this.state.currentImage !== 0) {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
  }

  goToNext() {
    if (this.state.currentImage !== photos.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.showLoaded();
    }, 100);
  }

  showLoaded() {
    this.imageList.current.style.opacity = 1;
  }

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <div className="art-color-underlay"/>
        <Col sm={{ span: 8, offset: 2 }} xl={{ span: 7, offset: 2 }}>
          <NavMenu title="Art"/>
        </Col>
        <Col xs={24} md={{span: 14 }} style={{
          zIndex: 100,
          marginTop:'-2px'
        }}>
        <div className='background-color'/>
          <div ref={ this.imageList } className="image-list">
            {
              photos.map((photo, i) =>
                <ImageCard openLightbox={ this.openLightbox } index={ i } key={ photo.id } description={ photo.description } image={ photo.src }/>
              )
            }
          </div>
        </Col>

        {
          this.state.lightboxIsOpen &&
          <div id="lightboxContainer">
            <div onClick={ this.closeLightbox } id="lightboxBackground"/>
            <FontAwesomeIcon onClick={this.goToPrev} className="chevronLeft" icon={ faChevronLeft }/>
            <img className="activeImage" src={`${photos[this.state.currentImage].src}`} alt=""/>
            <FontAwesomeIcon onClick={this.goToNext} className="chevronRight" icon={ faChevronRight }/>
          </div>
        }

      </div>
    )
  }
}


export default ArtPage;
