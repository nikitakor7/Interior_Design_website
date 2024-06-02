import "./projectCard.css";
import project1 from "../images/project/project1.jpg";
import project2 from "../images/project/project2.jpg";
import project3 from "../images/project/project3.jpg";
import project4 from "../images/project/project4.jpg";
import project5 from "../images/project/project5.jpg";
import project6 from "../images/project/project6.jpg";
import project7 from "../images/project/project7.jpg";
import project8 from "../images/project/project8.jpg";

import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const projectImages = [project1, project2, project3, project4, project5, project6, project7, project8];

export function ProjectCard(props) {
    const imageIndex = parseInt(props.props.id); // Assuming props.key starts from 1
    console.log(imageIndex);
    console.log(projectImages[imageIndex]);
    //let imageSrc = projectImages[imageIndex];
    let imageSrc = project2;
    
    return(
        <div className="op-project">
          <div className="op-pro-img">
            {/* Correctly set the src attribute with the dynamic image source */}
            <img src={imageSrc} alt="project" />
          </div>
          <div className="op-pro-detail">
            <div className="op-pro-info">
              <p className="op-prj-title">{props.props.project_name}</p>
              {/* {props.data.projects.projectName} */}
              <p className="op-prj-path">Decor / Architecture</p>
            </div>
            <div className="op-pro-btn">
              <Link to={`/project-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
    );
}
