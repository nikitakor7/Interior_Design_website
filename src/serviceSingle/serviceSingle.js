import "./serviceSingle.css";
import brand1 from "../images/brand1.svg";
import brand2 from "../images/brand2.svg";
import brand3 from "../images/brand3.svg";
import brand4 from "../images/brand4.svg";
import brand5 from "../images/brand5.svg";
import servicePhoto from "../images/serviceSingle.jpg";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export function ServiceSingle() {
  return (
    <div className="serviceSingle">
      <div className="serviceS-header">
        <h1>
          Service Single
          <p>Home / Service Single</p>
        </h1>
      </div>
      <div className="serviceS-info">
        <div className="ss-info-detail">
          <h1>Leading the Trends in Modern Living Services</h1>
          <p>
            <span>
              Our mission is to deliver exceptional design services that transform spaces into functional and aesthetically pleasing environments.
            </span>
            <br />
            <br />
            At San Fran Design, we take pride in our comprehensive approach, which includes initial consultation, concept development, detailed planning, project management, and final execution. Our experienced team ensures every project is completed to the highest standards, on time, and within budget.
            <br />
            <br />
            From modern minimalism to classic elegance, we tailor our services to meet the unique needs and preferences of each client, creating spaces that are both beautiful and practical.
          </p>
        </div>
        <div className="ss-info-brands">
          <ul>
            <li><img src={brand1} alt="Brand 1" /></li>
            <li><img src={brand2} alt="Brand 2" /></li>
            <li><img src={brand3} alt="Brand 3" /></li>
            <li><img src={brand4} alt="Brand 4" /></li>
            <li><img src={brand5} alt="Brand 5" /></li>
          </ul>
        </div>
        <div className="ss-info-video">
          <ReactPlayer
            width="100%"
            height="350px"
            className="react-player"
            controls
            light
            url="https://www.youtube.com/embed/PqvlU9WI5pU"
          />
        </div>
        <div className="ss-pointers">
          <div className="ss-pointer one">
            <h1>Our Interior Design Services</h1>
            <ul>
              <li>High-quality design services tailored to your needs.</li>
              <li>Projects delivered on time with the latest design trends.</li>
              <li>Expertise in scientific principles for optimal results.</li>
              <li>Comprehensive renovation services.</li>
              <li>Confidence in our project outcomes.</li>
            </ul>
          </div>
          <div className="ss-pointer two">
            <h1>Creating Artful Spaces</h1>
            <ul>
              <li>Innovative design solutions for unique spaces.</li>
              <li>Timely project delivery with cutting-edge designs.</li>
              <li>Application of scientific methods for superior results.</li>
              <li>Expert renovation services for all types of projects.</li>
              <li>Dedicated to achieving excellence in every project.</li>
            </ul>
          </div>
        </div>
        <div className="go-portfolio">
          <div className="gp-img">
            <img src={servicePhoto} alt="Service" />
          </div>
          <div className="gp-text">
            <h1>Our Passion for Design Drives Us</h1>
            <p>We are committed to creating spaces that inspire and delight. Explore our portfolio to see our work in action.</p>
            <Link to="/ourportfolio">
              <button>
                Our Portfolio <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="years">
          <p className="year num">12</p>
          <p>Years Of Experience</p>
        </div>
        <div className="s-project">
          <p className="sp num">85</p>
          <p>Successful Projects</p>
        </div>
        <div className="a-project">
          <p className="ap num">15</p>
          <p>Active Projects</p>
        </div>
        <div className="customers">
          <p className="cust num">95</p>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
}
