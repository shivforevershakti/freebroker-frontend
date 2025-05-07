import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/user.jpg"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-links">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Commercial</a>
          <a href="#">Post Property</a>

          {/* Profile Dropdown */}
          <div className="navbar-profile">
            <button onClick={() => setProfileOpen(!profileOpen)} className="profile-btn">
              <img
                src="/user.jpg"
                alt="Profile"
                className="profile-img"
              />
              <span>My Account</span>
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <a href="#">Dashboard</a>
                <a href="#">Profile</a>
                <a href="#">Logout</a>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger */}
        <div className="navbar-toggle">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="hamburger-icon">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Commercial</a>
          <a href="#">Post Property</a>
          <a href="#">My Account</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
