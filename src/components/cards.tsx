import style from "../styles/cards.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export default function Cards() {
  return (
    <>
     <div className="tariff-page-warp-above d-block">
        <h1>Tariff Schedules</h1>
        <img
          src="https://vntr.moit.gov.vn/themes/ripple/images/Group 829.svg"
          alt="Highline title"
          style={{ display: "flex", marginLeft: "15px" }}
        />
      </div>
      <div className={style.tariffPageWarp}>
        <div className={style.tariffPageWarpBelow}>
          <div className={style.tariffPageElement}>
            <div className={style.tariffPageElement1}>
              <a href="https://vntr.moit.gov.vn/fta/3/2" aria-label="ATIGA">
                <img
                  src="https://vntr.moit.gov.vn/storage/fta/atiga-540x360.jpg"
                  alt="ATIGA"
                />
              </a>
              <div className={style.tariffPageElement1s}>
                <div className={style.space}></div>
                <a href="https://vntr.moit.gov.vn/fta/3/2">
                  <p className="tariff-detail">ATIGA</p>
                </a>
              </div>
            </div>
            <div className={style.tariffPageElement2}>
              <div
                className={style.tariffPageElement2s}
                style={{ height: "190px" }}
              >
                <p style={{ color: "gray", fontSize: "20px" }}>Effect Date</p>
                <p style={{ color: "black", fontSize: "18px" }}>05/05/2010</p>
                <p style={{ color: "gray", fontSize: "20px" }}>
                  Participating countries
                </p>
                <p style={{ color: "black", fontSize: "19px" }}>
                  Brunei Darussalam, Indonesia, Cambodia, Lao People's
                  Democratic Republic, Myanmar, Malaysia, Philippines,
                  Singapore, Thailand, Viet Nam
                </p>
              </div>

              <div className={style.tariffPageElement3s}>
                <DropdownButton
                  align="end"
                  title="Tariff Document"
                  id="dropdown-menu-align-end"
                  style={{ width: "100%" }}
                >
                  <Dropdown.Item eventKey="1" >
                    Tariff Schedules (AKFTA)
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
