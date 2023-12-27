import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faBell,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarState, setSidebarState] = useState("show");

  const togglesideMenu = () => {
    if (sidebarState === "show") {
      const sidebar = document.getElementById("#sidebar");
      sidebar.className = "content animate__animated animate__bounceOutUp";
      setTimeout(() => {
        sidebar.style.display = "none";
        setSidebarState("hide");
      }, 300);
    } else {
      const sidebar = document.getElementById("#sidebar");
      sidebar.style.display = "flex";
      sidebar.className = "content animate__animated animate__bounceInDown";
      setSidebarState("show");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        const sidebar = document.getElementById("#sidebar");
        sidebar.style.display = "flex";
        sidebar.className = "content";
        setSidebarState("show");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="main-nav">
        <div>
          <div className="fa-bar">
            <FontAwesomeIcon onClick={togglesideMenu} icon={faBars} />{" "}
          </div>
          <div>
            <div className="nural-welcome">
              <h3>Welcome! Nural</h3>
            </div>
            <p>COMPANYADMIN</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon className="header-icon" icon={faBell} />
          <div>
            <Link
              className="header-icon"
              style={{ color: "white" }}
              to="/setting"
            >
              <FontAwesomeIcon icon={faCog} />
            </Link>
          </div>
          <FontAwesomeIcon className="header-icon" icon={faQuestionCircle} />
          <div className="circleIcon">
            <FontAwesomeIcon className="header-icon" icon={faUser} />
            <div className="dropdown-content">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
