import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { Col } from 'antd';

import photos from '../api';
import NavMenu from '../components/navMenu';
import ImageCard from '../components/imageCard';

// const ImageCard = dynamic(() => import('../components/imageCard'));


class ArtPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { currentImage: 0 };
  //   this.closeLightbox = this.closeLightbox.bind(this);
  //   this.openLightbox = this.openLightbox.bind(this);
  //   this.gotoNext = this.gotoNext.bind(this);
  //   this.gotoPrevious = this.gotoPrevious.bind(this);
  // }

  // openLightbox(event, obj) {
  //   this.setState({
  //     currentImage: obj.index,
  //     lightboxIsOpen: true,
  //   });
  // }
  // closeLightbox() {
  //   this.setState({
  //     currentImage: 0,
  //     lightboxIsOpen: false,
  //   });
  // }
  // gotoPrevious() {
  //   this.setState({
  //     currentImage: this.state.currentImage - 1,
  //   });
  // }
  // gotoNext() {
  //   this.setState({
  //     currentImage: this.state.currentImage + 1,
  //   });
  // }

  componentDidMount() {
    window.addEventListener('DOMContentLoaded', (event) => {
      console.log('DOM fully loaded and parsed');
    })
  }

  photoRender() {
    photos.map((photo) =>
      <ImageCard key={photo.id} description={photo.description} image={photo.src}/>
    )
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
          {
            photos.map((photo) =>
            <ImageCard key={photo.id} description={photo.description} image={photo.src}/>
            )
          }
        </div>
        </Col>
      </div>
    )
  }
}


export default ArtPage;
