import React, { useEffect, useState } from 'react';
import { FaBell } from "react-icons/fa";
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, Dropdown, ListGroup } from 'react-bootstrap';
import {
  rawEarlierNotifications,
  rawNewNotifications
} from 'data/notification/notification';
import { isIterableArray } from 'helpers/utils';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Notification from 'components/notification/Notification';

const NotificationDropdown = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [isAllRead, setIsAllRead] = useState(false);

  // Handler
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.innerWidth < 1200 && setIsOpen(false);
    });
  }, []);

  const markAsRead = e => {
    e.preventDefault();
    setIsAllRead(true);
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown navbar={true} as="li" show={isOpen} onToggle={handleToggle}>
      <Dropdown.Toggle
        bsPrefix="toggle"
        className={classNames('px-0 bg-transparent shadow-none border-0 nav-link', {
          'notification-indicator notification-indicator-primary': !isAllRead
        })}
      >
        <FaBell className="fs-3" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-card dropdown-menu-end dropdown-caret dropdown-caret-bg">
        <Card
          className="dropdown-menu-notification dropdown-menu-end shadow-none"
          style={{ maxWidth: '20rem' }}
        >
          <FalconCardHeader
            className="card-header"
            title="Notifications"
            titleTag="h6"
            light={false}
            endEl={
              <Link
                className="card-link fw-normal"
                to="#!"
                onClick={markAsRead}
              >
                Mark all as read
              </Link>
            }
          />
          <ListGroup
            variant="flush"
            className="fw-normal fs--1 scrollbar"
            style={{ maxHeight: '19rem' }}
          >
            <div className="list-group-title">NEW</div>{' '}
            {isIterableArray(rawNewNotifications) &&
              rawNewNotifications.map(notification => (
                <ListGroup.Item key={notification.id} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroup.Item>
              ))}
            <div className="list-group-title">EARLIER</div>
            {isIterableArray(rawEarlierNotifications) &&
              rawEarlierNotifications.map(notification => (
                <ListGroup.Item key={notification.id} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroup.Item>
              ))}
          </ListGroup>
          <div
            className="card-footer text-center border-top"
            onClick={handleToggle}
          >
            <Link className="card-link d-block" to="#!">
              View all
            </Link>
          </div>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
