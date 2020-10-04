import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./footer.style.scss";

const FooterPage = () => {
  return (
    <div style={{ background: "#1c2331" }}>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="contact-heading-container">
            <MDBCol md="2">
              <h5 className="title">Contact Me</h5>
            </MDBCol>

            <MDBCol md="12">
              <hr className="hr-white division-line" />
              <ul className="row link-container">
                <li className="list-unstyled">
                  <a href="harishseervi939@gmail.com" className="link-color">
                    Email
                    <span className="contact-icon">
                      <MDBIcon icon="envelope" />
                    </span>
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href=""
                    className="link-color"
                  >
                    Instagram{" "}
                    <spna className="contact-icon">
                      <MDBIcon icon="instagram" />
                    </spna>
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href=""
                    className="link-color"
                  >
                    Facebook{" "}
                    <span className="contact-icon">
                      <MDBIcon icon="facebook-square" />
                    </span>
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href=""
                    className="link-color"
                  >
                    Github{" "}
                    <spna className="contact-icon">
                      <MDBIcon icon="github" />
                    </spna>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <a href="/" className="brand-name">
              {" "}
              Help-Desk{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
