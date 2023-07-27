import { FaAngleRight } from 'react-icons/fa';
import { pathNames } from './pathNames';

export const getMainMenu = () => ([
  {
    path: pathNames.myprofile,
    label: 'My Profile',
    icon: FaAngleRight,
  },
  {
    path: pathNames.myorders,
    label: 'My Orders',
    icon: FaAngleRight,
  },
  {
    path: pathNames.myevents,
    label: 'My Events',
    icon: FaAngleRight,
  },
  {
    path: pathNames.contactus,
    label: 'Contact Us',
    icon: FaAngleRight,
  },
]);

export const userMenu = [];
