import {
  html5,
  bootstrap,
  react,
  redux,
  c,
  cpp,
  java,
  python,
  javascript,
  sql,
  mongodb,
  firebase,
  mysql,
  nodejs,
  css3,
  spring,
  mariadb,
  jQuery,
  reactNative,
  git,
  jira,
  confluence,
  docker,
  jenkins,
} from "../assets";

import webDevAnimationData from "../lotties/app_development.json";
import appDevAnimationData from "../lotties/app_development.json";
import databaseAnimationData from "../lotties/database.json";
import programmingLanguagesAnimationData from "../lotties/programming_languages.json";
import frameworksAndTools from "../lotties/frameworks_and_tools.json";

export const whatIDo = {
  programmingLanguages: {
    label: "Programming Languages",
    icons: [
      { src: c, tooltip: "C" },
      { src: cpp, tooltip: "C++" },
      { src: java, tooltip: "Java" },
      { src: python, tooltip: "Python" },
      { src: javascript, tooltip: "Javascript" },
      { src: sql, tooltip: "SQL" },
    ],
    subLabels: null,
    animationData: programmingLanguagesAnimationData,
    // customizeAnimation: {
    //   height: 400,
    // },
  },
  webDev: {
    label: "Web and Mobile App Technologies",
    icons: [
      { src: html5, tooltip: "HTML" },
      { src: css3, tooltip: "CSS" },
      { src: jQuery, tooltip: "jQuery" },
      { src: bootstrap, tooltip: "Bootstrap" },
      { src: react, tooltip: "React" },
      { src: redux, tooltip: "Redux" },
      { src: nodejs, tooltip: "Nodejs" },
      { src: spring, tooltip: "Spring" },
      { src: reactNative, tooltip: "React Native" },
    ],
    subLabels: null,
    animationData: webDevAnimationData,
  },
  // appDev: {
  //   label: "App Technologies",
  //   icons: [{ src: react, tooltip: "React Native" }],
  //   subLabels: null,
  //   animationData: appDevAnimationData,
  // },
  database: {
    label: "Database Systems",
    icons: [
      { src: mongodb, tooltip: "MongoDB" },
      { src: firebase, tooltip: "Firebase" },
      { src: mysql, tooltip: "MySQL" },
      { src: mariadb, tooltip: "MariaDB" },
    ],
    subLabels: null,
    animationData: databaseAnimationData,
    customizeAnimation: {
      height: "60%",
    },
  },
  tools: {
    label: "Tools",
    icons: [
      { src: docker, tooltip: "Docker" },
      { src: git, tooltip: "Git" },
      { src: jenkins, tooltip: "Jenkins" },
      { src: jira, tooltip: "Jira" },
      { src: confluence, tooltip: "Confluence" },
    ],
    animationData: frameworksAndTools,
  },
};
