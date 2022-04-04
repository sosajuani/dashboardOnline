import React from "react";
import '../asset/css/headerTop.css'
import Avatar from '../asset/images/avatar.jpg'
function HeaderTop() {
  return (
    <div className="headerTop">
      <ul className="navUser">
        <li className="navUserLi">
          <i className="fas fa-envelope fa-fw"></i>
        </li>
        <li className="navUserLi">
          <i className="fas fa-bell fa-fw"></i>
        </li>
        <li className="navUserLi">
          <img src={Avatar} className="avatarHeader" alt="avatar"/>
        </li>
      </ul>
    </div>
  );
}

export default HeaderTop;
