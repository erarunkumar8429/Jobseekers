import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
// Admin/Carousel.tsx
const AdminCarousel = () => {
  return (
    <div className="w-100 shadow-sm rounded-4 overflow-hidden">
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100" // This Bootstrap class ensures it fills the container
            src="/SiderImage/sider1.jpg"
            alt="Dashboard Banner"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
        {/* ... other items */}
      </Carousel>
    </div>
  );
};


export default AdminCarousel;