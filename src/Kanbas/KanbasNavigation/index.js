import { Link, useLocation } from "react-router-dom";
import React from "react";
import {
  FaBook,
  FaCalendar,
  FaUser,
  FaInbox,
  FaClock,
  FaQuestion,
  FaTachometerAlt,
  FaPlay,
  FaIcons,
} from 'react-icons/fa';
import "./index.css";


function KanbasNavigation() {
  const icons = [FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaPlay, FaQuestion]
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];
  const { pathname } = useLocation();
  return (
    <div>
      <div className="fixed-navbar">
        <ul className="navbar-nav flex-column">
          {links.map((link, index) => (
            <li className="nav-item">
               <Link
                to={`/Kanbas/${link}`}
                className={`nav-link ${pathname.includes(link) ? 'active' : ''}`}
              >
                {React.createElement(icons[index], {
                  className: `fa-icon ${!pathname.includes(link) ? 'white-selected' : ''}`,
                })}
                <br />
                <span>{link}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default KanbasNavigation;