import React, { useContext, Fragment } from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import { navbarBreakPoint } from 'config';
import AppContext from 'context/Context';
import Flex from 'components/common/Flex';
import Logo from 'components/common/Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import routes from 'routes/routes';

const NavbarVertical = () => {
  const {
    config: {
      showBurgerMenu
    }
  } = useContext(AppContext);

  return (
    <Navbar
      expand={navbarBreakPoint}
      className="navbar-vertical bg-200"
    >
      <Flex alignItems="center">
        <Logo at="navbar-vertical" width={30} />
      </Flex>
      <Navbar.Collapse
        in={showBurgerMenu}
      >
        <div className="navbar-vertical-content scrollbar bg-200">
          <Nav className="flex-column" as="ul">
            {routes.map(route => (
              <Fragment key={route.label}>
                <NavbarVerticalMenu routes={route.children} />
              </Fragment>
            ))}
          </Nav>

        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
