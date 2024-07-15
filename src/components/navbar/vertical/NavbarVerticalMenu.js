import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import NavbarVerticalMenuItem from './NavbarVerticalMenuItem';


const NavbarVerticalMenu = ({ routes }) => {

  return routes.map(route => {
    if (!route.children) {
      return (
        <Nav.Item as="li" key={route.name} >
          <NavLink
            to={route.to}
            className={({ isActive }) =>
              ` p-3 ${isActive ? 'active nav-link bg-primary rounded shadow-sm text-white' : 'nav-link'} `
            }
          >
            <NavbarVerticalMenuItem route={route} />
          </NavLink>
        </Nav.Item>
      );
    }
  });
};

export default NavbarVerticalMenu;
