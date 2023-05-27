import React from "react";
import img1 from "../assets/p2.jpeg";
import img2 from "../assets/p3.jpeg";
import img3 from "../assets/p4.png";
import img4 from "../assets/p5.png";
import img5 from "../assets/p6.jpeg";
import img6 from "../assets/p7.jpeg";
import img7 from "../assets/p8.webp";

const Home = () => {
  return (
    <>
      <div className="row" style={{ marginTop: "80px" }}>
        <div className="col-md-6">
          <h1 style={{ fontWeight: "bold", lineHeight: "45px" }}>
            Easy <br /> scheduling <br />
            <span style={{ color: "blue" }}>ahead</span>
          </h1>
          <p style={{ fontSize: "20px", marginTop: "30px" }}>
            Calendly is your hub for scheduling meetings professionally and
            efficiently,eliminating the hassle of back-and-forth emails so you
            can get back to work
          </p>

          <div className="input-group" style={{ marginTop: "30px" }}>
            <input
              type="text"
              className="form-control input1"
              placeholder="Enter your email"
            />
            <span className="input-group-btn">
              <button className="btn btn-default signup" type="button">
                Sign Up
              </button>
            </span>
          </div>
          <p
            style={{
              fontSize: "16px",
              paddingLeft: "40px",
              paddingTop: "10px",
              color: "grey",
            }}>
            Create your free account. No credit card required.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={img1}
            className="img-responsive"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-12" style={{ backgroundColor: "#f6f3f3" }}>
          <h1 className="text-center">
            Simplified scheduling for more than <br />
            <span style={{ color: "blue", fontWeight: "bolder" }}>
              10,000,000
            </span>
            users worldwide.
          </h1>
        </div>
      </div>

      <div
        className="row"
        style={{
          backgroundColor: "#f6f3f3",
          height: "110px",
          marginBottom: "70px",
        }}>
        <div className="col-md-2">
          <img src={img2} className="img-responsive imgg" />
        </div>
        <div className="col-md-2">
          <img src={img3} className="img-responsive imgg" />
        </div>
        <div className="col-md-2">
          <img src={img4} className="img-responsive imgg" />
        </div>
        <div className="col-md-2">
          <img src={img5} className="img-responsive imgg" />
        </div>
        <div className="col-md-2">
          <img src={img6} className="img-responsive imgg" />
        </div>
        <div className="col-md-2">
          <img src={img7} className="img-responsive imgg" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <p
            className="text-center"
            style={{
              position: "relative",
              top: 0,
              left: "-9px",
              backgroundColor: "blue",
              color: "white",
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}>
            1.
          </p>
          <p className="body1">
            Create <br /> simple rules
          </p>
          <div className="body2">
            <p
              style={{
                paddingTop: "45px",
                fontSize: "17px",
                paddingLeft: "15px",
              }}>
              Let Calendly know your <br />
              availability preferences and <br />
              it'll do the work for you.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <p
            className="text-center"
            style={{
              position: "relative",
              top: 0,
              left: "-9px",
              backgroundColor: "blue",
              color: "white",
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}>
            2.
          </p>
          <p className="body1">
            Share your <br /> links
          </p>
          <div className="body2">
            <p
              style={{
                paddingTop: "45px",
                fontSize: "17px",
                paddingLeft: "15px",
              }}>
              Share guests your Calendly <br />
              link or embed it on your <br />
              website.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <p
            className="text-center"
            style={{
              position: "relative",
              top: 0,
              left: "-9px",
              backgroundColor: "blue",
              color: "white",
              height: "20px",
              width: "20px",
              borderRadius: "50%",
            }}>
            3.
          </p>
          <p className="body1">Get booked</p>
          <div className="body2">
            <p
              style={{
                paddingTop: "45px",
                fontSize: "17px",
                paddingLeft: "15px",
              }}>
              They pick a time and the <br />
              event is added to your <br />
              calender.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
