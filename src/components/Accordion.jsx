import React, { useState } from "react";
import "./styles/accordion.css";

const Accordion = () => {
  const obj = [
    {
      id: 1,
      Name: "Karnataka",
      lang: "Speaking Kannada",
    },
    {
      id: 2,
      Name: "Kerala",
      lang: "Speaking Malayalam",
    },
    {
      id: 3,
      Name: "Tamil Nadu",
      lang: "Speaking Tamil",
    },
    {
      id: 4,
      Name: "Andra Pradesh",
      lang: "Speaking Telugu",
    },
    {
      id: 5,
      Name: "Maharashtra",
      lang: "Speaking Marathi",
    },
  ];
  const [accord, setAccord] = useState(obj);
  const [show, setShow] = useState(false);
  const [activeLang, setActiveLang] = useState(null);

  const showLang = (index) => {
    if (activeLang === index) {
      setActiveLang(null);
    } else {
      setActiveLang(index);
    }
  };

  return (
    <>
      <div>
        <div class="accordion">
          <h2>Languages</h2>

          {accord.map((items, index) => {
            return (
              <div className="accordion-content">
                <header>
                  <span className="accordion-content-title">{items.Name}</span>
                  <i
                    onClick={() => showLang(index)}
                    className="accordion-content-show"
                  >
                    {index === activeLang ? "Hide" : "Show"}
                  </i>
                </header>
                {activeLang === index && (
                  <p className="accordion-content-description">{items.lang}</p>
                )}
              </div>
            );
          })}
        </div>{" "}
      </div>
    </>
  );
};

export default Accordion;
