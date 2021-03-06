import React from "react";

export default function TopNav() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="hours">
            <i className="far fa-clock text-primary"></i>
            <span> Open hours: 09-16 monday - friday</span>
          </div>
          <div className="socialmedia">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram ms-2"></i>
            <i className="fab fa-twitter ms-2"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
