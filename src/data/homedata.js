import {
  html5,
  bootstrap,
  react,
  redux,
  cpp,
  java,
  python,
  javascript,
  mongodb,
  firebase,
  mysql,
  nodejs,
} from "../assets";

import webDevAnimationData from "../lotties/web_development.json";
import appDevAnimationData from "../lotties/app_development.json";
import databaseAnimationData from "../lotties/database.json";
import programmingLanguagesAnimationData from "../lotties/programming_languages.json";

export const whatIDo = {
  webDev: {
    label: "Web Technologies",
    icons: {
      Frontend: [
        { src: html5, tooltip: "HTML5" },
        { src: bootstrap, tooltip: "Bootstrap" },
        { src: react, tooltip: "React" },
        { src: redux, tooltip: "Redux" },
      ],
      Backend: [{ src: nodejs, tooltip: "Nodejs" }],
    },
    subLabels: ["Frontend", "Backend"],
    animationData: webDevAnimationData,
  },
  appDev: {
    label: "App Technologies",
    icons: [{ src: react, tooltip: "React Native" }],
    subLabels: null,
    animationData: appDevAnimationData,
  },
  database: {
    label: "Database System",
    icons: [
      { src: mongodb, tooltip: "MongoDB" },
      { src: firebase, tooltip: "Firebase" },
      { src: mysql, tooltip: "MySQL" },
    ],
    subLabels: null,
    animationData: databaseAnimationData,
    customizeAnimation: {
      height: "60%",
    },
  },
  programmingLanguages: {
    label: "Programming Languages",
    icons: [
      { src: cpp, tooltip: "C++" },
      { src: java, tooltip: "Java" },
      { src: python, tooltip: "Python" },
      { src: javascript, tooltip: "Javascript" },
    ],
    subLabels: null,
    animationData: programmingLanguagesAnimationData,
    // customizeAnimation: {
    //   height: 400,
    // },
  },
};
