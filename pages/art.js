import React, { Component } from 'react';
// import './ArtPage.css';


import { Col, Card } from 'antd';
import photos from '../api';
import NavMenu from '../components/navMenu';
import ImageCard from '../components/imageCard';

// import Gallery from 'react-photo-gallery';
// import Lightbox from 'react-images';

class ArtPage extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    // photos[o]
    // var hello = document.getElementsByClassName('hello')
    // hello[0].classList.add('hello-intro')


  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <div className="art-color-underlay"/>
        <Col sm={{ span: 8, offset: 2 }} xl={{ span: 7, offset: 2 }}>
          <NavMenu title="Art"/>
        </Col>
        <Col xs={24} md={{span: 14 }} style={{
          zIndex: 100,
          marginTop:'-2px'
        }}>
        <div className='background-color'/>
        <div className="image-list">
          { photos.map((photo) =>
            // <Col span={6} md={12} xs={24}>
              // <img alt="image1" style={{width: '100%'}} src={photo.src} />
              <ImageCard key={photo.id} description={photo.description} image={photo.src}/>
            // </Col>
          )}
        </div>
        </Col>
      </div>
    )
  }
}


export default ArtPage;