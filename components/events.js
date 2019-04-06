import React from "react";
// import './Events.css';
import { events } from '../api';

import { Col, Row, Button } from 'antd';

const Events = () => (
  <div style={{border: "10px solid #1C1820"}}>
    <div className="events-section">
      <Row>
        <Col sm={{ offset: 2 }} md={{ offset: 1,  span: 5 }}>
          <h3 className="events-banner">EVENTS</h3>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 22, offset: 2 }} md={{span:18, offset:0}}>
          {events.map((event, i) =>
            <div key={i}>
              <Row style={{ display: 'flex', paddingBottom: '40px' }}>
                <Col xs={24} sm={14}>
                  <div className="event event01">
                    <div className="date">
                      <p>{event.date}</p>
                    </div>
                    <div className="venue">
                      <p>{event.venue}</p>
                    </div>
                    <div className="location">
                      <p>{event.location}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={{span: 8, offset: 2}}>

                <div className="vertical-center">
                {
                  event.clickable === true ?
                    <a href={"//" + event.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="button"
                        size={'large'}>
                        {event.buttonText}
                      </Button>
                    </a>
                    :
                    <Button
                      className="button"
                      size={'large'}>
                      {event.buttonText}
                    </Button>
                }
                  </div>
                </Col>
              </Row>

              <Button
                className="mobile-button"
                size={'large'}>
                {event.buttonText}
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  </div>
);

export default Events;