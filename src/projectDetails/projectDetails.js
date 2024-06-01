import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.png";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Your client name</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>23.02.2023</td>
              </tr>
              <tr>
                <td>Link</td>
                <td>Link example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Minimal Look Bedrooms</h2>
          <p>
            Experience the essence of simplicity and sophistication with our Minimal Look Bedrooms. We will work with you in creating the most beautiful, elegant and comfortable bedrooms.
            <br />
            Immerse yourself in a space characterized by tranquility and refined aesthetics.
        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={photo} />
      </div>
    </div>
  );
}
