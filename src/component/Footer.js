import React from "react";
import Footer1 from "../img/footer1.png";
import Footer2 from "../img/footer2.png";
import Footer3 from "../img/footer3.png";
import Footer4 from "../img/footer4.png";
function Footer() {
  const list = [
    {
      text: "Markets",
      img: Footer1,
    },
    {
      text: "Follow",
      img: Footer2,
    },
    {
      text: "Community",
      img: Footer3,
    },
    {
      text: "Account",
      img: Footer4,
    },
  ];
  return (
    <footer>
      {list.map((item, index) => {
        return (
          <div key={index} className={index === 0 ? "active" : ""}>
            <img src={item.img} />
            <span> {item.text}</span>
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
