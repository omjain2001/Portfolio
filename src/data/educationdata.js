import { hackerrank, coursera } from "../assets";
import { COLORS } from "../COLORS";

export const educationList = [
  {
    degree: "Bachelor of Engineering - Information Technology",
    university: "Pune Institute of Computer Technology",
    location: "Pune, India",
    score: "GPA - 9.34",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    university: "Swami Vivekanand junior college",
    location: "Jalgaon, India",
    score: "Score - 90.77%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    university: "St. Teresa’s Convent Higher Secondary School",
    location: "Jalgaon, India",
    score: "Score - 96.00%",
  },
];

export const achievementList = [
  {
    img: hackerrank,
    title: "Skills",
    description:
      "Hackerrank is the best platform to kickstart competitive coding as well as build your coding skills. I have practiced programming languages such as c++, python, java on it. I solve various questions on it to improve problem solving skill.",
    buttonLabel: "Stats",
    url: "https://www.hackerrank.com/omjain2606",
  },
  {
    img: coursera,
    title: "Programming for Everybody (Getting Started with Python)",
    description:
      "I have learned the basics of python through this course. Charles Russell Severance, the instructor of this course taught and explained python programming basics in a very simple manner.",
    buttonLabel: "Certificate",
    url: "https://coursera.org/share/1f3afacb4d6a4d8037a58e7386a639d0",
    style: { width: "50%", color: COLORS.button },
  },
  // {
  //   img: codechef,
  //   title: "Skills",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  //   buttonLabel: "Stats",
  //   url: "https://www.codechef.com/users/omjain_1008",
  // },
];
