import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/p1.png";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="row">
      <div className="col-md-12">
        <div style={{ display: "flex", marginTop: "20px", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={logo} style={{ height: "40px", width: "130px" }} />
            </Link>
            <nav className="topp">
              <Link to="/individuals">Individuals</Link>
              <Link to="/teams">Teams</Link>
              <Link to="/enterprise">Enterprise</Link>
            </nav>
          </div>
          <div>
            {isAuthenticated ? (
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Link to="/dashboard" style={{ fontWeight: "bold" }}>
                  Dashboard
                </Link>
                <span style={{ color: "#666" }}>
                  {user?.email}
                </span>
                <button 
                  onClick={logout} 
                  className="btn btn-danger btn-sm"
                  style={{ marginLeft: "10px" }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "10px" }}>
                <Link 
                  to="/login" 
                  className="btn btn-default"
                  style={{ marginRight: "10px" }}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="btn btn-primary"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
