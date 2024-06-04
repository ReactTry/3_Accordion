import React, { useState } from "react";
import "./styles/accordion.css";

const AccordionDetails = ({ items }) => {
  const [showDetails, setshowDetails] = useState(false);

  return (
    <div className="accordion-content">
      <header>
        <span className="accordion-content-title">{items.Name}</span>
        <i
          onClick={() => setshowDetails((prev) => !prev)}
          className="accordion-content-show"
        >
          {showDetails ? "Hide" : "Show"}
        </i>
      </header>
      {showDetails && (
        <p className="accordion-content-description">{items.lang}</p>
      )}
    </div>
  );
};
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

const AccordionNew = () => {

  const [accord, setAccord] = useState(obj);
  const [show, setShow] = useState(false);
  const [activeLang, setActiveLang] = useState(null);

  const showLang = (id) => {
    activeLang === id ? setActiveLang(null) : setActiveLang(id);
  };

  return (
    <>
      <div>
        <div className="accordion">
          <h2>Languages</h2>
          {accord.map((items) => {
            return (
              <>
                <AccordionDetails items={items} />
              </>
            );
          })}
        </div>{" "}
      </div>
    </>
  );
};

export default AccordionNew;
