import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from 'assets/illustrations/falcon.png';

const Logo = ({ at, width, className, textClass, ...rest }) => {
  return (
    <Link
      to="/"
      className={classNames(
        'text-decoration-none',
        { 'navbar-brand text-left': at === 'navbar-vertical' },
        { 'navbar-brand text-left': at === 'navbar-top' }
      )}
      {...rest}
    >
      <div
        className={classNames(
          'd-flex',
          {
            'align-items-center py-3': at === 'navbar-vertical',
            'align-items-center': at === 'navbar-top',
            'flex-center fw-bolder fs-5 mb-4': at === 'auth'
          },
          className
        )}
      >
        <img className="me-2" src={logo} alt="Logo" width={width} />
        <span className={classNames('font-sans-serif fs-2 text-900', textClass)}>Metrix</span>
      </div>
    </Link>
  );
};

Logo.defaultProps = { at: 'auth', width: 58 };

export default Logo;
