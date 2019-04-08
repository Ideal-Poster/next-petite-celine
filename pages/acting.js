import React, { Component } from 'react';
import { Row, Col, Popover, Button } from 'antd';

import '../styles.less';
import ImageToggle from '../components/imageToggle';
import NavMenu from '../components/navMenu';

const content = (
  <div style={{maxWidth: '60vw'}}>
    <p>
      Celine's first love was film. She began her career as an actress at age 6,
      and became a member of SAG in 2002. Celine's work can be seen in feature films
      such as, Spielberg’s “Catch Me if You Can” and Eastwood’s “Mystic River”),
      commercials, and TV, as well as work voice overs and indie films. Celine graduated
      from Pace University in NYC with a BFA in Acting. She also taught weekly
      Improvisational Acting classes at The Door High School in Manhattan.
    </p>
  </div>
);

class ActingPage extends Component {
  state = { isHovering: true };

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return(
      <div id="acting-container">
        <div className="acting-color-underlay"></div>
        <Col sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 2 }}>
          <NavMenu title="Actress"/>
        </Col>
        <Col md={{ span: 16 }} xl={{ span: 14 }} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Row>
            <ImageToggle
              maskedImage={"../static/mask/celine-1-mask.png"}
              image={"../static/mask/celine-1.png"}/>

            <Popover placement="bottomRight" content={content} title="Bio">
              <Button id='bio-button' type="primary">Bio</Button>
            </Popover>
          </Row>
          <Col span={12}>
            <ImageToggle
              maskedImage={"../static/mask/celine-2-mask.png"}
              image={"../static/mask/celine-2.png"}/>
          </Col>
          <Col span={12}>
            <ImageToggle
              maskedImage={"../static/mask/celine-3-mask.png"}
              image={"../static/mask/celine-3.png"}/>
          </Col>
        </Col>
        <Col span={12} offset={6}>
          <Row>
            <div className="reel-box"/>
            <div className="video-wrapper reel">
              <iframe title="music-video" src="https://www.youtube.com/embed/96ayQ3GsfrE?rel=0?theme=light&color=white&mute=1&autoplay=1" frameBorder="0" gesture="media"
                allow="encrypted-media" allowFullScreen></iframe>
            </div>
          </Row>
        </Col>
      </div>
    )
  }
};

export default ActingPage;