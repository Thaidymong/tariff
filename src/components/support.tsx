import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/support.module.scss";
export default function Support() {
  return (
    <>
      <div className="tariff-page-warp-above d-block">
        <h1>Support</h1>
        <img
          src="https://vntr.moit.gov.vn/themes/ripple/images/Group 829.svg"
          alt="Highline title"
          style={{ display: "flex", marginLeft: "15px" }}
        />
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item style={{ height: "300px" }}>
          <Carousel.Caption>
            <div className="d-flex">
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/hscode.png"
                  alt=""
                />
                <p>What is my HS code?</p>
              </div>
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/use-site.png"
                  alt=""
                />
                <p>How to use this side?</p>
              </div>
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/icon-loogo.jpg"
                  alt=""
                />
                <p>Trade Rresouce and Links?</p>
              </div>
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/women.png"
                  alt=""
                />
                <p>Women in Business</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px" }}>
          <Carousel.Caption>
            <div className="d-flex">
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/access.png"
                  alt=""
                />
                <p>Equal Access</p>
              </div>
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/qa.png"
                  alt=""
                />
                <p>FAQs</p>
              </div>
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/hscode.png"
                  alt=""
                />
                <p>What is my HS code?</p>
              </div>
              <div className={`col-3 ${style.image}`}>
                <img
                  src="https://vntr.moit.gov.vn/storage/logo-support/use-site.png"
                  alt=""
                />
                <p>How to use this side?</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
