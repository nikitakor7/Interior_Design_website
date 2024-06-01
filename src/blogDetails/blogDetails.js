import "./blogDetails.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import photo1 from "../images/blogContent1.png";
import photo2 from "../images/blogContent2.png";
import { Link } from "react-router-dom";

export function BlogDetails() {

  const handleChange=(e)=>{
    const pClassList = e.target.parentElement;
    if(e.target.classList.contains("nonselected")){
    for (let i=0; i<pClassList.childNodes.length;i++){
      if(pClassList.childNodes[i].className === ("blogD-tag selected")){
        pClassList.childNodes[i].className = "blogD-tag nonselected"
      }
    }
          e.target.classList.remove("nonselected")
      e.target.classList.add("selected")
    }
    else if(e.target.classList.contains("selected")) {
      for (let i=0; i<pClassList.childNodes.length;i++){
        if(pClassList.childNodes[i].className === ("blogD-tag selected")){
          pClassList.childNodes[i].className = "blogD-tag nonselected"
        }
      }
    }
  }

  return (
    <div className="blogDetails">
      <div className="blogD-header"></div>
      <div className="blogDetailsAll">
        <div className="blog-content">
          <h1>Understanding Sustainable Interior Design</h1>
          <div className="bc-photo">
            <img src={photo1} alt="blog"></img>
          </div>
          <div className="datePath">
            <p className="date">26 December 2022</p>
            <p className="path">Interior / Design / Home / Decore</p>
          </div>
          <div className="bc-text t1">
            <p>
              Sustainable interior design is about more than just choosing eco-friendly materials or energy-efficient appliances. It's a holistic approach that takes into account the entire lifecycle of a space, from conception to demolition. It encompasses principles of environmental responsibility, social equity, and economic viability, aiming to create spaces that are healthy, functional, and environmentally friendly.

              Key Principles of Sustainable Interior Design
              Material Selection: One of the most significant aspects of sustainable interior design is the choice of materials. Opting for renewable, recycled, or locally sourced materials can help reduce the environmental impact of a project. From reclaimed wood flooring to non-toxic paints and finishes, there are countless options available that prioritize sustainability without sacrificing style or quality.
              
              Energy Efficiency: Energy consumption is a major contributor to environmental degradation, so it's essential to prioritize energy-efficient design strategies. This includes incorporating natural lighting, maximizing insulation, and selecting energy-efficient appliances and lighting fixtures. By reducing energy consumption, sustainable interior design not only minimizes environmental impact but also lowers operating costs for homeowners and businesses.
              
              Water Conservation: Water scarcity is a growing concern in many parts of the world, making water conservation a critical aspect of sustainable interior design. Choosing low-flow plumbing fixtures, implementing rainwater harvesting systems, and incorporating drought-tolerant landscaping are just a few ways to reduce water usage and promote conservation in the built environment.
              
              Waste Reduction: Construction and demolition waste are significant contributors to landfill pollution, so minimizing waste should be a priority in sustainable interior design. This can be achieved through careful planning, recycling and reusing materials whenever possible, and implementing strategies to reduce packaging waste during construction and renovation projects.
              
              Indoor Air Quality: Indoor air quality has a profound impact on human health and well-being, so sustainable interior design prioritizes strategies to improve air quality and reduce exposure to harmful pollutants. This includes choosing low-VOC (volatile organic compound) materials, incorporating natural ventilation systems, and selecting indoor plants that help purify the air.
              
              The Benefits of Sustainable Interior Design
              Embracing sustainability in interior design offers a multitude of benefits, both for individuals and the planet as a whole. From reducing carbon emissions and conserving natural resources to creating healthier, more livable spaces, the advantages of sustainable design are clear. Additionally, sustainable design can enhance the aesthetic appeal and value of a property, making it a wise investment for homeowners and businesses alike.
              
              Conclusion
              As we strive to build a more sustainable future, the role of interior designers has never been more crucial. By embracing principles of environmental responsibility, social equity, and economic viability, designers have the power to shape spaces that not only look beautiful but also promote the health and well-being of occupants and the planet. From material selection to energy efficiency, every decision counts in the journey towards sustainability in interior design. Together, we can create spaces that inspire, nurture, and endure for generations to come.
            </p>
          </div>
          <div className="blogD-quotes">
            <div className="blogD-q-content">
              <h1>“</h1>
              <p className="blogD-q-comment">
                The details are not the details. They make the design.
              </p>
            </div>
          </div>

          <div className="bc-text t2">
            <h1>Design sprints are great</h1>
            <p>
                In the fast-paced world of product development and design, time is of the essence. Every day lost to inefficient processes or misaligned teams can mean missed opportunities and lost revenue. This is where design sprints come into play, offering a structured framework for rapid prototyping, testing, and iteration. Design sprints are not just great; they're essential for staying ahead in today's competitive landscape.
                <ul>
                <li/>
                What are Design Sprints?
                Popularized by Jake Knapp and the team at Google Ventures, a design sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with users. It's a highly focused and time-constrained approach that brings together cross-functional teams to tackle complex problems and validate solutions quickly.
                <li/>
                Why Design Sprints Are Great?
                <ul>
                <li/>
                Efficiency: Design sprints are all about efficiency. By condensing the product development cycle into a five-day timeframe, teams can rapidly ideate, prototype, and validate solutions without getting bogged down in endless meetings or prolonged decision-making processes. This streamlined approach allows companies to move from idea to implementation in record time.
                Collaboration: One of the key strengths of design sprints is their ability to foster collaboration among diverse teams. By bringing together stakeholders from various departments – including design, development, marketing, and beyond – design sprints ensure that everyone has a seat at the table and a voice in the decision-making process. This cross-functional collaboration not only leads to more creative solutions but also builds a shared sense of ownership and buy-in for the final product.
                <li/>
                User-Centricity: At the heart of every design sprint is a focus on the end-user. By incorporating user feedback and testing into the process from the very beginning, design sprints ensure that solutions are grounded in real-world needs and preferences. This user-centric approach minimizes the risk of developing products or features that miss the mark and increases the likelihood of success in the marketplace.
                <li/>
                Risk Mitigation: Design sprints are an invaluable tool for mitigating risk. By quickly prototyping and testing ideas early in the development process, teams can identify potential pitfalls and pivot as needed before investing significant time and resources into full-scale production. This iterative approach allows companies to fail fast and learn quickly, reducing the likelihood of costly mistakes down the line.
                <li/>
                Innovation: Last but not least, design sprints are a catalyst for innovation. By bringing together diverse perspectives and encouraging outside-the-box thinking, design sprints push teams to explore new ideas and challenge conventional wisdom. Whether it's solving a specific problem or exploring new opportunities, design sprints provide the structure and support needed to turn innovative concepts into tangible results.
                </ul>
                </ul>
                Conclusion
                In today's rapidly evolving business landscape, companies can't afford to waste time or resources on ineffective processes. Design sprints offer a proven methodology for accelerating innovation, solving problems, and bringing great ideas to life. By embracing design sprints, companies can stay ahead of the curve, delight customers, and drive sustainable growth in an increasingly competitive market. So, if you're looking to supercharge your product development efforts, look no further than the power of design sprints.
            </p>
          </div>
          <div className="bc-photo">
            <img src={photo2} alt="blog"></img>
          </div>

          <div className="bc-text t3">
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
            </p>
          </div>

          <div className="blogD-share">
            <div className="bd-tags">
              <div className="bd-main-tag">
                <p className="tag">Tags</p>
              </div>
              <div className="bd-other-tags">
                <p className="one">Kitchen</p>
                <p className="two">Bedroom</p>
              </div>
            </div>
            <div className="bd-smedias">
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
          <div className="blog-leave-reply">
            <p>Leave a Reply</p>
            <div className="nameEmail">
              <input name="fullname" placeholder="Name" />
              <input name="mail" placeholder="Email" />
            </div>
            <div className="sitePhone">
              <input name="site" placeholder="Subject" />
              <input name="phone" placeholder="Phone" />
            </div>
            <div className="interested">
              <textarea
                name="interested"
                placeholder="Hello, I am interested in.."
              />
            </div>
            <div className="blogD-saving-send">
              <div className="blogD-saving">
                <input type="checkbox" name="remember-mail" />
                <label>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
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
        <div className="blogD-sidebar">
          <div className="search-box">
            <input type="search" name="seacrh" placeholder="Search" />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className="latest-news">
            <h2>Latest News</h2>
            <div className="news">
              <Link to={`/blog-details`}><p className="news-title">Focus on Eco-design</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
            <div className="news">
            <Link to={`/blog-details`}><p className="news-title">Focus on comfort and reliability</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
            <div className="news">
            <Link to={`/blog-details`}><p className="news-title">Sustainable housing</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
          </div>
          <div className="blogD-categories">
            <h2>Categories</h2>
            <ul>
              <ol>Decoration</ol>
              <ol>Door Windows</ol>
              <ol>Home Land</ol>
              <ol>Roof Installation</ol>
            </ul>
          </div>
          <div className="blogD-alltags">
            <h2>Tags</h2>
            <div className="blogD-tags">
              <p
                className="blogD-tag nonselected"
                  onClick={handleChange}
              >
                Kitchen
              </p>
              <p className="blogD-tag nonselected"   onClick={handleChange}
              >Bedroom</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Building</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Architecture</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Kitchen Planing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
