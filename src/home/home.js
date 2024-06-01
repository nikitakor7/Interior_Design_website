import "./home.css";
import "./homeResponsive.css";
import photoBg from "../images/backgroung/homeBg.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import services from "../servicesPage/services.json";
import thoughts from "./peopleThoughts.json";
import CountUp from "react-countup";

import home1 from "../images/home/home1.jpg";
import hPoject1 from "../images/home/hProject1.jpg";
import hhProject2 from "../images/home/hProject2.jpg";
import hhProject3 from "../images/home/hProject3.jpg";
import hhProject4 from "../images/home/hProject4.jpg";
import hArticle1 from "../images/home/hArticle1.jpg";
import hArticle2 from "../images/home/hArticle2.jpg";
import hArticle3 from "../images/home/hArticle3.jpg";
import brand1 from "../images/brand1.svg";
import brand2 from "../images/brand2.svg";
import brand3 from "../images/brand3.svg";
import brand4 from "../images/brand4.svg";
import brand5 from "../images/brand5.svg";
import customer1 from "../images/home/customer1.png";
import customer2 from "../images/home/customer2.png";
import customer3 from "../images/home/customer.jpg";


export function Home() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log(e.target);
    if (e.target.className === "article nochosen") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "article nochosen";
      }
      e.target.classList.remove("nochosen");
      e.target.classList.add("chosen");
    } else if (e.target.className === "article chosen") {
      e.target.className = "article nochosen";
    }
  };
  return (
    <div className="home">
      <div className="homeNews" style={{ backgroundImage: `url(${photoBg})` }}>
        <h1>Let Your Home Be Unique</h1>
        <p>
         Unlock a world of possibilities to elevate your space. With countless variations of inspiring designs and concepts.
        </p>
        <Link to="">
          <button>
            Get Started
            <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
          </button>
        </Link>
      </div>
      <div className="homeOther">
        <div className="homePlans">
          {services.services
            .filter((services, index) => index < 3)
            .map((s, ind) => {
              return (
                <div className="homePlan" key={ind}>
                  <h2>{s.service_name}</h2>
                  <p>{s.service_content}</p>
                  <Link to={`/project-details`}>
                    <button>
                      Read More
                      <BsArrowRight
                        style={{ marginLeft: "4%", color: "#CDA274" }}
                      />
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="homeAboutUs">
            <div className="hp-subtext">
              <h1>Crafting Stylish Living: Where Art Meets Functionality</h1>
              <p>
                Experience the essence of refined living through our bespoke creations. 
                Amidst the allure of captivating layouts, we ensure that every detail speaks volumes of timeless elegance and functionality.
              </p>
              <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel: +1 (650) 458-7514">
              <p>
                +1 (650) 458-7514
                <br />
                <span>Talk to me 9am to 5pm PST </span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Get Free Estimate
              <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
            </button>
          </Link>
        </div>
            </div>
            <div className="hp-img">
              <img src={home1} alt="concept"></img>
            </div>
        </div>
        {/* <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel: +994 (070) 883-37-38">
              <p>
                +994 (070) 883-37-38
                <br />
                <span>Call Us Anytime</span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Get Free Estimate
              <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
            </button>
          </Link>
        </div> */}
        <div className="people-thoughts">
          <h1>What People Think About Us</h1>
          <div className="people">
            {thoughts.people.map((req, ind) => {
              let pic = customer1;
              if (ind == 1) pic = customer2;
              if (ind == 2) pic = customer3;
              return (
                <div className="person" key={ind}>
                  <div className="person-title">
                    <div>
                      <img src={pic} alt="customer"></img>
                    </div>
                    <p>
                      {req.fullname}
                      <br />
                      <span>{req.country}</span>
                    </p>
                  </div>
                  <p className="thought">{req.thoughts}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-brands">
          <ul>
            <ol>
              <img src={brand1} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand2} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand3} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand4} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand5} alt="brand"></img>
            </ol>
          </ul>
        </div>
        <div className="homeProjects">
          <h1>Explore Our Latest Projects</h1>
          <p>
            Dive into our portfolio where captivating designs await your discovery. Amidst the captivating layouts, immerse yourself in a world of inspired creations.
          </p>
          <div className="hp-list">
            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hPoject1} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Tiny Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject2} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Flowy Entryway</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject3} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Comfortable Workspace</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject4} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Enhancing living rooms on budget</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-experience">
        <div className="h-years">
        <CountUp className="h-year num" duration={4} end={2} />
          <p>Years Of Experience</p>
        </div>
        <div className="h-s-project">
        <CountUp duration={4} className="h-sp num" end={19} />
          <p>Success Project</p>
        </div>
        <div className="h-a-project">
        <CountUp duration={4} className="h-ap num" end={5} />
          <p>Active Project</p>
        </div>
        <div className="h-customers">
        <CountUp duration={4} className="h-cust num" end={30} />
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="articleNews">
        <h1>Articles & News</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts
        </p>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle3} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Understanding Sustainable Interior Design</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-interno">
        <h1>Want to join the San Fran Design?</h1>
        <p>We are always looking out for amazing designers like yourself.</p>
        <Link to={`/contact`}>
          <button>
            Contact With Us
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#292F36"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
