import React, { Component } from 'react';
// import './ArtPage.css';


import { Col, Button } from 'antd';
// import photos from './GalleryApi';
import NavMenu from '../components/navMenu';

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
          <a href="https://www.etsy.com/shop/GypsyLynx">
            <Button size={"large"} style={{ marginBottom: '5px', marginTop: '60px', background: '#6d3e8e', border: 'none' }} className="etsy-button" type="primary">Etsy Store</Button>
          </a>
          {/* <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          /> */}
        </Col>
      </div>
    )
  }
}


export default ArtPage;
