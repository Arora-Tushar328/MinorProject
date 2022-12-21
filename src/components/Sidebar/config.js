import {
  MdOutlineDoneAll,
  MdOutlineHourglassTop,
  MdRemoveDone,
} from 'react-icons/md';
import { AiFillHome, AiFillFileUnknown, AiFillGift } from 'react-icons/ai';
import { BsFillFilePdfFill, BsBookmarkStar } from 'react-icons/bs';
import { RiFileEditFill, RiAdminFill } from 'react-icons/ri';

// eslint-disable-next-line import/prefer-default-export
export const navItems = [
  {
    id: 1,
    name: 'Home',
    icon: AiFillHome,
    link: '',
  },
  {
    id: 2,
    name: 'Pending Contracts',
    icon: MdOutlineHourglassTop,
    link: '/pending',
  },
  {
    id: 3,
    name: 'Approved Contracts',
    icon: MdOutlineDoneAll,
    link: '/approved',
  },
  {
    id: 4,
    name: 'Rejected Contracts',
    icon: MdRemoveDone,
    link: '/rejected',
  },
  {
    id: 5,
    name: 'Edit Details',
    icon: RiFileEditFill,
    link: '/edit',
  },
];
