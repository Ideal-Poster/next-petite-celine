import React, { Component } from 'react';
import Route from 'next/router';

import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faFacebook, faYoutube)

class NavMenu extends Component  {
  constructor() {
    super();
    this.DOM = {
      title: React.createRef()
    }
  }

  render() {
    return(
      <div className="nav-container">
        <div id="header">
          <p id="static">Petite</p>
          <p id= "intro" ref={this.DOM.title}>
            { this.props.title }
          </p>
        </div>

        <ul className="menu-buttons">
          <li className="music">
            {
              this.props.title === "Celine" &&
              <div className="nav-rectangle"/>
            }
            <Link href="/">
              <a>Music</a>
            </Link>
          </li>
          <li className="art">
            {
              this.props.title === "Art" &&
              <div className="nav-rectangle"/>
            }
            <Link href="/art">
              <a>Art</a>
            </Link>
          </li>
          <li className="Acting">
            {
              this.props.title === "Actress" &&
              <div className="nav-rectangle"/>
            }
            <Link href="/acting">
              <a>Acting</a>
            </Link>
          </li>
        </ul>

        <div style={{ width: '120px' }}>
          <a href="https://www.instagram.com/petite_celine/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="instagram" icon={ faInstagram } />
          </a>

          <a href="https://www.facebook.com/cdutertre.nyc" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="facebook" icon={ faFacebook}/>
          </a>

          <a href="https://www.youtube.com/user/celineNYCmusic" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="youtube" icon={ faYoutube } />
          </a>
        </div>

        <a href="mailto:petitecelineworld@gmail.com" className="email">
          <p>petitecelineworld@gmail.com</p>
        </a>
      </div>
    );
  }

};

export default NavMenu;