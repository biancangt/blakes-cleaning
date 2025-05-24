import React from 'react';
import { FaHome, FaPhone } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <FaHome />
        <span>One-stop cleaning service</span>
      </div>

      <div className="topbar-right">
        <FaPhone />
        <a href="sms:+12544888917">254-488-8917</a>
      </div>
    </div>
  );
};

export default TopBar;
