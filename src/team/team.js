import "./team.css";
import m1 from "../images/team/member1.png";
import m0 from "../images/team/member2.jpg";
import data from "./team_members.json";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = {
  "member1.png": m0,
  "member2.jpg": m1,
  // Add more image imports and mappings if necessary
};

export function Team() {
  return (
    <div className="team">
      <div className="team-header">
        <h1>
          Our Professional
          <p>Home / Team</p>
        </h1>
      </div>
      <div className="team-members">
        {data.members
          .filter((m, ind) => ind < 8)
          .map((mbr, i) => {
            return (
              <Link to={`/team-single`} key={i}>
                <div className="member">
                  <div className="member-photo">
                    <img src={images[mbr.photo]} alt={mbr.fullname}></img>
                  </div>
                  <div className="member-info">
                    <p className="fullname">{mbr.fullname}</p>
                    <p className="m-detail">
                      {mbr.job}, {mbr.country}
                    </p>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/">
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <FaTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
