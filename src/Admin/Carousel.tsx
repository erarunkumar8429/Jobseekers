import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const AdminCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel 
        id="adminCarousel"
        variant="dark" 
        interval={2000} // Changes image every 2 seconds
        pause="hover"   // Optional: Pauses when mouse is over
        indicators={true}
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/SiderImage/sider3.jpg"
            alt="First slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/SiderImage/sider2.jpg"
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/SiderImage/sider1.jpg"
            alt="Third slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AdminCarousel;