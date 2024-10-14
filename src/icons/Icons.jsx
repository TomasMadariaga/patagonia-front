import { IoIosCall, IoMdSearch, IoIosAnalytics } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import {
  FaHome,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaFacebook,
  FaChevronUp,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import {
  MdArchitecture,
  MdManageAccounts,
  MdElectricBolt,
  MdRoomPreferences,
} from "react-icons/md";
import { SiInstructure } from "react-icons/si";

export const CallIcon = (props) => {
  return <IoIosCall {...props} />;
};

export const SearchIcon = (props) => {
  return <IoMdSearch {...props} />;
};

export const HomeIcon = (props) => {
  return <FaHome {...props} />;
};

export const TwitterIcon = (props) => {
  return <RiTwitterXFill {...props} />;
};

export const LinkedInIcon = (props) => {
  return <FaLinkedinIn {...props} />;
};

export const InstagramIcon = (props) => {
  return <FaInstagram {...props} />;
};

export const MailIcon = (props) => {
  return <TbMailFilled {...props} />;
};

export const MapMarkerIcon = (props) => {
  return <FaMapMarkerAlt {...props} />;
};

export const FacebookIcon = (props) => {
  return <FaFacebook {...props} />;
};

export const UpIcon = (props) => {
  return <FaChevronUp {...props} />;
};

export const AnalyticsIcon = (props) => {
  return <IoIosAnalytics {...props} />;
};

export const ArchitectureIcon = (props) => {
  return <MdArchitecture {...props} />;
};

export const MoneyCheckIcon = (props) => {
  return <FaMoneyCheckAlt {...props} />;
};

export const ManageIcon = (props) => {
  return <MdManageAccounts {...props} />;
};

export const CalendarIcon = (props) => {
  return <FaCalendarDays {...props} />;
};

export const DiamondIcon = (props) => {
  return <IoDiamondOutline {...props} />;
};

export const StructureIcon = (props) => {
  return <SiInstructure {...props} />;
};

export const ElectricIcon = (props) => {
  return <MdElectricBolt {...props} />;
};

export const MaintenanceIcon = (props) => {
  return <MdRoomPreferences {...props} />;
};