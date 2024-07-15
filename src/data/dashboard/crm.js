import { FiPieChart } from "react-icons/fi";
import { MdPeopleOutline } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";

import product2 from 'assets/products/7.jpg';
import product3 from 'assets/products/8.jpg';
import product5 from 'assets/products/9.jpg';
import product10 from 'assets/products/10.png';
import product11 from 'assets/products/11.png';
import product12 from 'assets/products/12.png';
import product13 from 'assets/products/13.png';
import product14 from 'assets/products/14.png';


export const statsData = (iconClass) => {
  return [
    {
      color: "primary",
      id: 1,
      icon: <FiPieChart className={iconClass} />,
      type: "react_icon",
      title1: "Sales",
      title2: "Volume",
      title3: null,
      title1_value: "$4,000,000.00",
      title2_value: "450",
      title3_value: null,
      extraValue_title1: null,
      extraValue_title2: "+20.00%",
      extraValue_title3: null,
      showOptions: true
    },
    {
      color: "warning",
      icon: <MdPeopleOutline className={iconClass} />,
      type: "react_icon",
      id: 2,
      title1: "Customers",
      title2: "Active",
      title3: null,
      title3_value: null,
      title1_value: "1,250",
      title2_value: "1180",
      extraValue_title1: "+15.80%",
      extraValue_title2: "85%",
      extraValue_title3: null,
      showOptions: true
    },
    {
      color: "warning",
      icon: <BsHandbag className={iconClass} />,
      type: "react_icon",
      id: 3,
      title1: "All Orders",
      title2: "Pending",
      title3: "Completed",
      title1_value: "450",
      title2_value: "5",
      title3_value: "445",
      extraValue_title1: null,
      extraValue_title2: null,
      extraValue_title3: null,
      showOptions: true
    }
  ]
};


export const summaries = [
  ['product', '2020', '2021'],
  ['Apex', 55, 78],
  ['Nimbus', 90, 88],
  ['Velocity', 67, 75],
  ['Aurora', 73, 85],
  ['Pioneer', 65, 70],
  ['Zephyr', 80, 95],
  ['Orion', 92, 88]
];

export const files = [
  {
    id: 1,
    img: product5,
    name: 'Apple Smart Watch Order',
    user: 'Antony',
    date: '12 Jul 2024',
    status: 'Pending',
  },
  {
    id: 2,
    img: product3,
    name: 'iPhone Purchase Receipt',
    user: 'Antony',
    date: '11 Jul 2024',
    status: 'Completed',
  },
  {
    id: 4,
    img: product2,
    name: 'iMac Order Confirmation',
    user: 'Rowen',
    date: '23 Sep 2023',
    status: 'Pending',
  },
  {
    id: 6,
    img: product10,
    name: 'Order Confirmation Document',
    user: 'Emily',
    date: '2 Oct 2023',
    status: 'Pending',
  },
  {
    id: 7,
    img: product11,
    name: 'Invoice for Order #2024-001',
    user: 'Michael',
    date: '3 Oct 2023',
    status: 'Completed',
  },
  {
    id: 8,
    img: product12,
    name: 'Shipping Labels Document',
    user: 'Sophia',
    date: '4 Oct 2023',
    status: 'Pending',
  },
  {
    id: 9,
    img: product13,
    name: 'Purchase Order Template',
    user: 'David',
    date: '5 Oct 2023',
    status: 'Completed',
  },
  {
    id: 10,
    img: product14,
    name: 'Order Archive Files',
    user: 'Emma',
    date: '6 Oct 2023',
    status: 'Pending',
  },
  
];
