import React, { useState } from "react";
import "./styles/accordion.css";

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

const Accordion = () => {

  const [accord, setAccord] = useState(obj);
  const [show, setShow] = useState(false);
  const [activeLang, setActiveLang] = useState(null);

  const showLang = (id) => {
    // if (activeLang === id) {
    //   setActiveLang(null);
    // } else {
    //   setActiveLang(id);
    // }
    activeLang === id ? setActiveLang(null) : setActiveLang(id);
  };

  return (
    <>
      <div>
        <div className="accordion">
          <h2>Languages</h2>

          {accord.map((items) => {
            return (
              <div key={items.id} className="accordion-content">
                <header>
                  <span className="accordion-content-title">{items.Name}</span>
                  <i
                    onClick={() => showLang(items.id)}
                    className="accordion-content-show"
                  >
                    {activeLang === items.id ? "Hide" : "Show"}
                  </i>
                </header>
                {activeLang === items.id && (
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
