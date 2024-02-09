import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const creations = [
    {
      title: "Kuyasa Health Center Website",
      description:
        "Kuyasa Health Center is a user-friendly website built with HTML, CSS, and JavaScript, offering a seamless experience for scheduling appointments with healthcare professionals and accessing mental health services. ",
      image: "../assets/kuyasa.jpg",
      icon: [
        <FontAwesomeIcon icon="fa-regular fa-up-right-from-square" />,
        <FontAwesomeIcon icon="fa-brands fa-github" />,
      ],
    },
    {
      title: "Bug Bank",
      description:
        "Bug Bank is a Python-based GUI banking application that provides users with a convenient and visually intuitive interface for managing their finances. With features like account balance tracking, transaction history, and user-friendly controls.",
      image: "../assets/bug-bank.jpg",
      icon: <FontAwesomeIcon icon="fa-brands fa-github" />,
    },
    {
      title: "Tax Calculator",
      description:
        "In order to help users understand their tax liability in accordance with South African tax legislation, the Java program determines the appropriate tax rate based on the user's income, applies the relevant rebates and provides a comprehensive result.",
      image: "../assests/tax-calculator.jpg",
      icon: <FontAwesomeIcon icon="fa-brands fa-github" />,
    },
  ];

  return (
    <div className="slider">
      <div className="creations">
        <div
          className="layout"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {creations.map((creation, index) => (
            <div key={index}>
              <h2>{creation.title}</h2>
              <p>{creation.description}</p>
              <img src={creation.image} alt={creation.title} />
              {Array.isArray(creation.icon) ? (
                creation.icon.map((icon, i) => <span key={i}>{icon}</span>)
              ) : (
                <span>{creation.icon}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
