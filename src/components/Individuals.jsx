import React from "react";
import Footer from "./Footer";
import img1 from "../assets/p9.webp";
import img2 from "../assets/p10.webp";
import img3 from "../assets/p11.webp";
import img4 from "../assets/p12.png";

const individuals = () => {
  return (
    <div>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-md-6">
          <h1 style={{ fontSize: "60px" }}>
            The genius way <br />
            to work <span style={{ color: "blue" }}>better</span>
          </h1>
          <p style={{ fontSize: "20px" }}>
            Calendly makes it easy to work smarter when you're <br />
            working solo. Meetings, sessions, and appointments <br />
            become more efficient ways to achieve success and <br />
            accomplish goals.
          </p>
          <button
            style={{
              height: "50px",
              borderRadius: "50px",
              width: "170px",
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}>
            Sign up for free
          </button>
        </div>
        <div className="col-md-6">
          <img
            src={img1}
            className="img-responsive"
            style={{ height: "400px" }}
            alt="Calendly"
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-6">
          <img
            src={img2}
            className="img-responsive"
            style={{ height: "350px" }}
            alt="Calendly"
          />
        </div>
        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <p style={{ color: "grey" }}>A CURATED CALENDAR</p>
          <h1 style={{ fontWeight: "bold" }}>Book up efficiently</h1>
          <p style={{ fontSize: "20px" }}>
            When invitees select a meeting slot from your schedule, they <br />
            only see the times you're available, and only the length and <br />
            type of meeting you want to have. Your schedule fills up <br />
            efficiently, and everyone avoids excess email exchanges.
          </p>
        </div>
      </div>

      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <p style={{ color: "grey" }}>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
          <h1 style={{ fontWeight: "bold" }}>
            Work like you have a <br /> personal assistant
          </h1>
          <p style={{ fontSize: "20px" }}>
            Because Calendly automates administrative tasks like
            <br />
            sending reminder emails and follow-ups, you can focus on <br />
            the work that builds your business and brings customers <br />
            back for more
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={img3}
            className="img-responsive"
            style={{ height: "350px" }}
            alt="Calendly"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12" style={{ marginTop: "50px" }}>
          <img
            src={img4}
            className="img-responsive"
            style={{ height: "250px", width: "100%" }}
            alt="Calendly"
          />
          <div className="body3">
            <h1
              style={{
                color: "white",
                fontWeight: "bolder",
                wordSpacing: "10px",
              }}>
              Find just-right plans <br />
              for individuals and <br />
              small teams
            </h1>
            <button
              style={{
                height: "50px",
                borderRadius: "20px",
                width: "150px",
                fontWeight: "bold",
                border: "none",
              }}>
              See our plans
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default individuals;
