import {
  hackerrank,
  coursera,
  python,
  aws,
  crif,
  ncstate,
  pict,
  mjcollege,
  teresa,
} from "../assets";
import { COLORS } from "../COLORS";

export const educationList = [
  {
    degree: "Master of Computer Science",
    university: "North Carolina State University",
    location: "Raleigh, NC, USA",
    score: "GPA - 4.0/4.0",
    logo: ncstate,
  },
  {
    degree: "Bachelor of Engineering - Information Technology",
    university: "Pune Institute of Computer Technology",
    location: "Pune, India",
    score: "GPA - 9.63/10.00",
    logo: pict,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    university: "Swami Vivekanand junior college",
    location: "Jalgaon, India",
    score: "Score - 90.77%",
    logo: mjcollege,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    university: "St. Teresa’s Convent Higher Secondary School",
    location: "Jalgaon, India",
    score: "Score - 96.00%",
    logo: teresa,
  },
];

export const achievementList = [
  // {
  //   img: hackerrank,
  //   title: "Skills",
  //   description:
  //     "Hackerrank is the best platform to kickstart competitive coding as well as build your coding skills. I have practiced programming languages such as c++, python, java on it. I solve various questions on it to improve problem solving skill.",
  //   buttonLabel: "Stats",
  //   url: "https://www.hackerrank.com/omjain2606",
  // },
  {
    img: crif,
    title: "CRIF India Hackathon 2023",
    description:
      // "Designed a solution to detect the diseases of the crops with just a single image of the crop leaf. It was implemented using Image Classification model using Transfer Learning. Informing the user about plant disease outbreaks in the user's vicinity was an add-on feature.",
      "Devised a novel solution for the swift detection of crop diseases, which entails the analysis of a single image of a plant leaf. This solution was realized through the application of an Image Classification model, leveraging the principles of Transfer Learning. In addition, an auxiliary feature was integrated, enabling users to receive timely notifications regarding instances of plant disease outbreaks in their immediate geographic vicinity.",
    buttonLabel: null,
    url: null,
    style: { width: "50%", color: COLORS.button },
  },
  {
    img: aws,
    title: "AWS Fundamentals: Building Serverless Applications",
    description:
      // "I learned about various AWS services such as Lambda, API Gateway, DynamoDB, S3, etc., the serverless architecture and how to build serverless applications using AWS services.",
      "Acquired knowledge pertaining to a diverse array of Amazon Web Services (AWS) offerings, including Lambda, API Gateway, DynamoDB, S3, and more. Delved into the intricacies of serverless architecture, mastering the art of crafting serverless applications by harnessing the capabilities of these AWS services.",
    buttonLabel: "Certificate",
    url: "https://coursera.org/share/a090672058769426de32d8e5cf11ba6a",
    style: { width: "50%", color: COLORS.button },
  },
  {
    img: aws,
    title: "AWS Cloud Technical Essentials",
    description:
      // "I have learned the basics of AWS cloud through this course. I have learned about various services provided by AWS such as EC2, S3, VPC, IAM, etc.",
      "Equipped me with a foundational understanding of the AWS cloud ecosystem. Orchestrated the establishment of Virtual Private Clouds (VPCs), subnets, and access policies for EC2 instances and databases. Expanded my knowledge by delving into an array of AWS services, including but not limited to S3, DynamoDB, and IAM.",
    buttonLabel: "Certificate",
    url: "https://coursera.org/share/5fca237b7c7400c97aad8745162c9c29",
    style: { width: "50%", color: COLORS.button },
  },
  {
    img: python,
    title: "Programming for Everybody (Getting Started with Python)",
    description:
      // "I have learned the basics of python through this course. Charles Russell Severance, the instructor of this course taught and explained python programming basics in a very simple manner.",
      "Attained a foundational grasp of Python and cultivated a profound understanding of its core elements, including variables, functions, classes, and objects. Moreover, I came to acknowledge the extensive prevalence of Python in the realms of Data Science and Data Analytics, underscoring its pivotal role in these domains.",
    buttonLabel: "Certificate",
    url: "https://coursera.org/share/1f3afacb4d6a4d8037a58e7386a639d0",
    style: { color: COLORS.button },
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
