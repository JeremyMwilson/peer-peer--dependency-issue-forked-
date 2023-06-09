import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.css";

interface SidebarMenuProps {
  children: React.ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`container ${isOpen ? "open" : ""}`}>
      <nav>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/privateInsurance" onClick={closeMenu}>
              Private Insurnace
            </Link>
          </li>
          <li>
            <Link to="/contact2" onClick={closeMenu}>
              Contact2
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
};
export default SidebarMenu;
