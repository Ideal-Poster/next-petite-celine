import React from 'react';
import Head from 'next/head';
import { Col } from 'antd';

import '../styles.less';
import NavMenu from '../components/navMenu';
import Events from '../components/events';
import MusicPlayer from '../components/musicPlayer';
import { playlist } from '../api';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple, faSpotify, faGooglePlay, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
library.add(faApple, faSpotify, faGooglePlay, faSoundcloud);

// import '@fortawesome/fontawesome-svg-core/styles.css';
import { Modal, Input } from 'antd';

class Home extends React.Component {
  state = {
    showComponent: false,
    visible: false,
    name: '',
    email: ''
  }
  constructor(props) {
    super(props);
    this.icons = React.createRef();
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.name);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    this.init();
    this.showLoaded();
    this.showModal();
  }

  showLoaded() {
    this.icons.current.style.opacity =  1;
  }

  init() {
    let tracks = Array.prototype.slice.call( document.getElementsByClassName("track") )
    tracks.forEach((track, i) => {
      track.addEventListener('click', () => {
        setTimeout(() => {
          this.musicPlayer._playMusic(i)
        }, 100);
        tracks.forEach(element => {
          if (element.classList.contains('active')) {
            element.classList.remove('active')
          }
        });
        tracks[i].classList.add('active');
      });
    });
  }

  render() {
    return(
      <div className="music-page-container">
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        </Head>

        <div>
          <Modal
            // title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >

            <div style={{textAlign: 'center', padding: '20px'}}>
              <h1>Join Petite Celine World</h1>
              <p>Stay up to date on news and events by joining my mailing list.</p>
            </div>
            <Input required={true}  name="name" placeholder="Name"  style={{ marginBottom: '10px' }} onChange={event => this.handleChange(event)}/>
            <Input name="email" placeholder="Email" />
          </Modal>
        </div>

        <div className="music-color-underlay"></div>
        <div className="background">
          <Col sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 2 }} id="nav-menu">
            <NavMenu title="Celine"/>
          </Col>
          <Col sm={{ offset: 2, span: 20 }} md={{ offset: 8, span: 8 }} xl={{ offset: 10, span: 6 }}>
            <div className="title-container-1">
              <div className="rectangle"/>
              <h2 className="album-title">Young Soldier</h2>
            </div>
            <ul>
              {playlist.map((el, i) =>
                <li onClick={this._onTrackClick} className={`track track-${i}`} key={i} style={{listStyleType: 'none'}}>{ el.title }</li>
              )}
            </ul>
            <div className="title-container-2">
              <div className="rectangle"/>
              <h2 className="video-title">“No No More”</h2>
            </div>
            <div className="video-wrapper">
              <iframe title="musicVideo" id="myVideo" className="music-video" src="https://www.youtube.com/embed/pnojhQrQsOE?rel=0&loop=1;showinfo=0?theme=light&color=white"
                frameBorder="0"  allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div style={{width:'330px'}}>
              <p className="purchase">Purchase Here</p>
              <div ref={ this.icons } className="icons">
                <a href="https://itunes.apple.com/us/album/words/1371314381?i=1371314384" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="apple" icon={ faApple } />
                </a>
                <a href="https://open.spotify.com/album/0xKZdHbA8Ftrrry0V24wyV" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="spotify" icon={ faSpotify } />
                </a>
                <a href="https://play.google.com/store/music/album/Petite_Celine_Young_Soldier?id=Blkqdzvkjjvonb4bfnjz5vvfjd4" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="googlePlay" icon={ faGooglePlay } />
                </a>
                <a href="https://soundcloud.com/petite-celine/sets/young-soldier" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="soundcloud" icon={ faSoundcloud } />
                </a>
              </div>
            </div>
          </Col>
        </div>
        {
          this.state.showComponent &&
          <MusicPlayer playlist={playlist} ref={musicPlayer => (this.musicPlayer = musicPlayer)}/>
        }
        <Events/>

        <style jsx>{`
          .background {
            background: url("./static/celine-portrait.png")no-repeat 50% 50%;
            background-size: cover;
            background-position: center;
            -moz-background-size: cover;
            -o-background-size: cover;
            -webkit-background-size: cover;
            min-height: 700px;
            height: 92vh;
          }
        `}</style>
      </div>

    );
  }
}

export default Home
