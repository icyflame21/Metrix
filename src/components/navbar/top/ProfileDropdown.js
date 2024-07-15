import { FaCrown } from "react-icons/fa";
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import team12 from 'assets/team/12.jpg';
import Avatar from 'react-avatar';

const ProfileDropdown = () => {
  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        className="pe-0 ps-2 nav-link  bg-transparent shadow-none border-0"
      >
        <Avatar src={team12} round size={40}/>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item className="fw-bold text-warning">
            <FaCrown className="me-1" />
            <span>Go Pro</span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Set status</Dropdown.Item>
          <Dropdown.Item>
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Item href="#!">Feedback</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item >
            Settings
          </Dropdown.Item>
          <Dropdown.Item >
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
