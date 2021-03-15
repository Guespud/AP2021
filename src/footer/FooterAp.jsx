import React from "react";
import { MDBContainer, MDBFooter, MDBCol, MDBRow } from "mdbreact";

const FooterAP = () => {
  const Styles = {
    link: {
      color: "#177134",
    },
    redes: {
      fontSize: "50px",
    },
  };

  return (
    <>
      <MDBFooter color="grey" className="font-small darken-3 pt-0">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="py-5">
              <div className="mb-3 flex-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/premiumarepas"
                  className="fb-ic"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-4 mr-3 fa-2x"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/jlzm_"
                  className="tw-ic"
                >
                  <i className="fab fa-twitter fa-lg white-text mr-md-4 mr-3 fa-2x"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/arepas.premium/"
                  className="ins-ic"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-4 mr-3 fa-2x"></i>
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            Copyright: &copy; {new Date().getFullYear()}- Developed by &nbsp;
            <a
              style={Styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alejandro-guespud/"
            >
              Alejandro Guespud
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
};

export default FooterAP;
