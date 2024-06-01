import "./contact.css";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Contact Us<p>Home / Contact</p>
        </h1>
      </div>
      <div className="contact-content">
        <h2>We love meeting new people and helping them.</h2>
        <div className="contact-form">
          <div className="contact-form-info">
            <div className="icons">
              <p>
                <span className="icon">
                  <HiOutlineMail />
                </span>
                <a href="mailto: clients@sanfran.design">clients@sanfran.design</a>
              </p>
              <p>
                <span className="icon">
                  <BsTelephone />
                </span>
                +1 (650) 458-7514
              </p>
              <p>
                <span className="icon">
                  <GiWorld />
                </span>
                <a href="www.yourdomain.com">www.sanfran.design</a>
              </p>
            </div>
            <div className="contact-smedias">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form-fill">
            <div className="nameEmail">
              <input name="fullname" placeholder="Name" />
              <input name="mail" placeholder="Email" />
            </div>
            <div className="subjectPhone">
              <input name="subject" placeholder="Subject" />
              <input name="phone" placeholder="Phone" />
            </div>
            <div className="interested">
              <textarea name="interested" placeholder="Hello, I am interested in.." />
            </div>
            <div className="send">
              <button>
                Send Now
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.265149633335!2d-122.41774318425172!3d37.77264067975908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817cd0b0aaab%3A0xa0c6e7d784b8c4ed!2s1550%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sus!4v1620307021045!5m2!1sen!2sus"
              title="map"
              style={{
                  border: "0",
                  width: "800px",
                  height: "350px",
                  allowFullScreen: "",
                  ariaHidden: "false",
                  tabIndex: "0"
              }}
          ></iframe>
      </div>
    </div>
  );
}
