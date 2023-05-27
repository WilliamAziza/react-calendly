import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-md-3">
          <h1 style={{ fontWeight: "bold" }}>
            Easy <br />
            <span style={{ color: "blue" }}>ahead</span>
          </h1>
          <p>
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <select className="form-control">
            <option>English</option>
            <option>French</option>
            <option>Twi</option>
            <option>Hausa</option>
          </select>
        </div>
        <div className="col-md-3">
          <h3>About</h3>
          <p>About Calendly</p>
          <p>Contact Sales</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Security</p>
        </div>
        <div className="col-md-3">
          <h3>Solutions</h3>
          <p>Customer Success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>
        <div className="col-md-3">
          <h3>Popular Features</h3>
          <p>Embed Calendly</p>
          <p>Availability</p>
          <p>Sending Notifications</p>
          <p>Using Calendly Mobile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
