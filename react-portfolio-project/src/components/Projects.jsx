import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faUpRightFromSquare,
} from "@fortawesome/free-brands-svg-icons"; // Import the necessary icons

const Projects = () => {
  const creations = [
    {
      title: "Kuyasa Health Center Website",
      description:
        "Kuyasa Health Center is a user-friendly website built with HTML, CSS, and JavaScript, offering a seamless experience for scheduling appointments with healthcare professionals and accessing mental health services. ",
      image: require("../assets/kuyasa.jpg"),
      icon: [
        <FontAwesomeIcon icon="fa-regular fa-up-right-from-square" />,
        <FontAwesomeIcon icon="fa-brands fa-github" />,
      ],
    },
    {
      title: "Bug Bank",
      description:
        "Bug Bank is a Python-based GUI banking application that provides users with a convenient and visually intuitive interface for managing their finances. With features like account balance tracking, transaction history, and user-friendly controls.",
      image: require("../assets/bug-bank.jpg"),
      icon: <FontAwesomeIcon icon="fa-brands fa-github" />,
    },
    {
      title: "Tax Calculator",
      description:
        "In order to help users understand their tax liability in accordance with South African tax legislation, the Java program determines the appropriate tax rate based on the user's income, applies the relevant rebates and provides a comprehensive result.",
      image: require("../assests/tax-calculator.jpg"),
      icon: <FontAwesomeIcon icon="fa-brands fa-github" />,
    },
  ];

  return <div>Creations</div>;
};

export default Projects;
