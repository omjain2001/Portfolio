import {
  istriwalaImg,
  chatAppImg,
  devConnectorImg,
  react,
  firebase,
  mongodb,
  socketIo,
  redux,
  nodejs,
} from "../assets";

export const projectList = [
  {
    img: istriwalaImg,
    title: "Istriwala App",
    description:
      "This project aims to ease the work of Estreewala. It includes the features like maintaining day-to-day customer records, check pending and completed orders, check payment status, etc.",
    logos: [
      { icon: react, tooltip: "React Native" },
      { icon: firebase, tooltip: "Firebase" },
      { icon: redux, tooltip: "Redux" },
      { icon: nodejs, tooltip: "Nodejs" },
    ],
    btnLabel: "View",
    btnLink:
      "https://drive.google.com/file/d/1K3ZbUK5DfqmFolcjXT_Qhgr3uokz70pQ/view?usp=sharing",
  },
  {
    img: devConnectorImg,
    title: "DevConnector",
    description: `It is a social media platform to connect users across the world where user can post, like, comment, build profile, etc. This was a learning project under the instructor - Brad Traversy. It is developed using MERN stack.`,
    logos: [
      { icon: react, tooltip: "React" },
      { icon: redux, tooltip: "Redux" },
      { icon: nodejs, tooltip: "Nodejs" },
      { icon: mongodb, tooltip: "MongoDB" },
    ],
    btnLabel: "View",
    btnLink: "https://devconnector-fqu1.onrender.com",
  },
  {
    img: chatAppImg,
    title: "Chat App",
    description:
      "It is a real time chat application. It allows the users to join the room and chat with the users in that room. For the real-time messaging, socket.io library is used. It is learning project under the instructor - Andrew Mead",
    logos: [
      { icon: nodejs, tooltip: "Nodejs" },
      { icon: socketIo, tooltip: "Socket.io" },
    ],
    btnLabel: "Link",
    btnLink: "https://chatapp-5p97.onrender.com",
  },
];
