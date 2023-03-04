// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/dashboard"
  },
  {
    icon: UilClipboardAlt,
    heading: "My Profile",
    path: "/dashboard/profile"
  },
  {
    icon: UilClipboardAlt,
    heading: "My Courses",
  },
  {
    icon: UilUsersAlt,
    heading: "My Job Status",
  },
  {
    icon: UilPackage,
    heading: 'My Favourites'
  },

];


export const ProfileSidebarData = [
  {
    icon: UilEstate,
    heading: "About Me",
    path: "/"
  },
  {
    icon: UilClipboardAlt,
    heading: "Edit Profile",
    path: "/"
  },
  {
    icon: UilClipboardAlt,
    heading: "Resume",
    path: "/"
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Courses",
    color: {
      backGround: "linear-gradient(180deg, #06beb6 0%, #48b1bf 100%)",
      boxShadow: "0px 4px 8px 0px #b3ece9",
    },
    barValue: 70,
    value: "05",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Completed",
    color: {
      // backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      backGround: "linear-gradient(180deg, #06beb6 0%, #48b1bf 100%)",

      boxShadow: "0px 4px 8px 0px #b3ece9",
      
    },
    barValue: 80,
    value: "03",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Certificate",
    color: {

      backGround: "linear-gradient(180deg, #06beb6 0%, #48b1bf 100%)",

      boxShadow: "0px 4px 8px 0px #b3ece9",
      
    },
    barValue: 60,
    value: "02",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU",
    name: "Advance HTML",
    noti: "you have completed the assessment.",
    time: "25 seconds ago",
  },
  {
    img: "https://images.unsplash.com/photo-1534221738043-a1a90ca6a9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "JavaScript",
    noti: "new course is launching in the next month",
    time: "30 minutes ago",
  },
  {
    img:"https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    name: "Node JS",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
