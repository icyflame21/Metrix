import { RiDashboardLine } from "react-icons/ri";
import { BsBagDash } from "react-icons/bs";
import { IoPeopleOutline, IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";

export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: false,
  children: [
    {
      name: 'Dashboard',
      to: '/',
      icon: <RiDashboardLine className="me-2" />,
      active: true,
    },
    {
      name: 'Orders',
      to: '/analytics',
      icon: <BsBagDash className="me-2" />,
      active: false
    },
    {
      name: 'Customers',
      to: '/crm',
      icon: <IoPeopleOutline className="me-2" />,
      active: true
    },
    {
      name: 'Inventory',
      to: '/ecommerce',
      icon: <BiWallet className="me-2" />,
      active: true
    },
    {
      name: 'Conversations',
      to: '/management',
      icon: <IoChatboxEllipsesOutline className="me-2" />,
      active: true
    },
    {
      name: 'Settings',
      to: '/saaS',
      icon: <IoSettingsOutline className="me-2" />,
      active: true
    }
  ]
};

export default [
  dashboardRoutes,
];
