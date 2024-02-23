import React from "react";
import kuyasaImage from "../../images/kuyasa.png";
import bugBankImage from "../../images/bug-bank.png";
import taxCalculatorImage from "../../images/tax-calculator.png";
import "./Slider.css"; // Make sure to adjust the path to your CSS file

const Slider = () => {
  const dataSlide = [
    {
      slider: [
        {
          id: "1",
          src: kuyasaImage,
          title: "Kuyasa Health Center",
          description:
            "Kuyasa Health Center is a user-friendly website built with HTML, CSS, and JavaScript, offering a seamless experience for scheduling appointments with healthcare professionals and accessing mental health services. ",
          link: "View In Github",
          url: "https://github.com/Asekona80/Kuyasa-Health-services",
        },
        {
          id: "2",
          src: bugBankImage,
          title: "Bug Bank",
          description:
            "Bug Bank is a Python-based GUI banking application that provides users with a convenient and visually intuitive interface for managing their finances. With features like account balance tracking, transaction history, and user-friendly controls.",
          link: "View In Github",
          url: "https://github.com/TshepoShale/pythonProject1",
        },
        {
          id: "3",
          src: taxCalculatorImage,
          title: "Tax Calculator",
          description:
            "In order to help users understand their tax liability in accordance with South African tax legislation, the Java program determines the appropriate tax rate based on the user's income, applies the relevant rebates and provides a comprehensive result.",
          link: "View In Github",
          url: "https://github.com/TshepoShale/Tax-Calculator-in-Java",
        },
      ],
    },
  ];

  return (
    <>
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <h2 className="section--heading">Creations</h2>
          </div>
          <div></div>
        </div>
        <div className="portfolio--section--container">
          {dataSlide[0]?.slider?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <p className="text-sm portfolio--link">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0  0  20  19"
                      fill="none"
                    >
                      <path
                        d="M4.66667  1.66675H18V15.0001M18  1.66675L2  17.6667L18  1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Slider;
