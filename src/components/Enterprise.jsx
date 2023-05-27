import React from "react";
import Footer from "./Footer";
import img1 from "../assets/p3.jpeg";
import img2 from "../assets/p4.png";
import img3 from "../assets/p5.png";
import img4 from "../assets/p6.jpeg";
import img5 from "../assets/p7.jpeg";
import img6 from "../assets/p8.webp";
import img7 from "../assets/p21.webp";
import img8 from "../assets/p22.jpeg";
import img9 from "../assets/p23.png";
import img10 from "../assets/p20.png";

const Enterprise = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center" style={{ marginTop: "70px" }}>
          <h1 style={{ fontWeight: "bolder" }}>
            <span style={{ color: "#1363df" }}>Way more</span> than a scheduling
            link
          </h1>
          <p style={{ fontSize: "17px", paddingTop: "15px" }}>
            Standardize on the #1 scheduling platform and deliver the power of
            Calendly across your entire organization
          </p>
          <button
            style={{
              height: "40px",
              width: "160px",
              borderRadius: "20px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "black",
              color: "white",
            }}>
            Contact Sales
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div
        className="row"
        style={{
          backgroundImage: `url(${img10})`,
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          marginTop: "50px",
        }}>
        <div className="row">
          <div className="col-md-4"></div>
          <div
            className="col-md-4 text-center"
            style={{ color: "white", paddingTop: "30px" }}>
            <h4>
              Trusted by more than 50,000 of the world's leading organizations
            </h4>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row" style={{ marginLeft: "10px", marginTop: "10px" }}>
          <div className="col-md-2">
            <img src={img1} className="img-responsive imggg" alt="" />
          </div>
          <div className="col-md-2">
            <img src={img2} className="img-responsive imggg" alt="" />
          </div>
          <div className="col-md-2">
            <img src={img3} className="img-responsive imggg" alt="" />
          </div>
          <div className="col-md-2">
            <img src={img4} className="img-responsive imggg" alt="" />
          </div>
          <div className="col-md-2">
            <img src={img5} className="img-responsive imggg" alt="" />
          </div>
          <div className="col-md-2">
            <img src={img6} className="img-responsive imggg" alt="" />
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "60px" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">
              <div
                className="thumbnail"
                style={{
                  paddingLeft: "15px",
                  height: "450px",
                  border: "1px inset rgb(231, 237, 246)",
                }}>
                <h3 style={{ color: "#1363df" }}>Sales</h3>
                <img src={img7} alt="..." style={{ height: "170px" }} />
                <div className="caption">
                  <p style={{ fontSize: "17px" }}>
                    Convert more leads and prospects into meetings and revenue.
                    Easily book demos and customer calls without the back and
                    forth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="thumbnail"
                style={{
                  paddingLeft: "15px",
                  height: "450px",
                  border: "1px inset rgb(231, 237, 246)",
                }}>
                <h3 style={{ color: "#1363df" }}>Customer Success</h3>
                <img src={img8} alt="..." style={{ height: "170px" }} />
                <div className="caption">
                  <p style={{ fontSize: "17px" }}>
                    Deliver better support interactions and customer
                    consultations. Stay connected with automated reminders and
                    follow-ups.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="thumbnail"
                style={{
                  paddingLeft: "15px",
                  height: "450px",
                  border: "1px inset rgb(231, 237, 246)",
                }}>
                <h3 style={{ color: "#1363df" }}>Recruiting</h3>
                <img src={img9} alt="..." style={{ height: "170px" }} />
                <div className="caption">
                  <p style={{ fontSize: "17px" }}>
                    Fill your candidate pipeline and book more interviews and
                    recruiter screens with easy, standardized scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-md-offset text-center">
          <button
            style={{
              height: "40px",
              width: "160px",
              borderRadius: "20px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "black",
              color: "white",
            }}>
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enterprise;
