import React from 'react';
import Flex from 'components/common/Flex';

const NavbarVerticalMenuItem = ({ route }) => {
  return (
    <Flex>
      {route.icon && <span>{route.icon}</span>}
      <span className="nav-link-text ">{route.name}</span>
    </Flex>
  );
};

export default React.memo(NavbarVerticalMenuItem);
