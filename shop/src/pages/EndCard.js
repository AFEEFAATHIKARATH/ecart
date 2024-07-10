import React from "react";
import "./EndCard.css";

const Wrapper = () => {
  const data = [
    {
      cover: "fa-solid fa-truck-fast",
      title: "Worldwide Delivery",
      desc: "We offer competitive prices on our 100 million plus product range.",
    },
    {
      cover: "fa-solid fa-id-card",
      title: "Safe Payment",
      desc: "We offer competitive prices on our 100 million plus product range.",
    },
    {
      cover: "fa-solid fa-shield",
      title: "Shop With Confidence",
      desc: "We offer competitive prices on our 100 million plus product range.",
    },
    {
      cover: "fa-solid fa-headset",
      title: "24/7 Support",
      desc: "We offer competitive prices on our 100 million plus product range.",
    },
  ];

  return (
    <section className="wrapper background">
      <div className="container grid2">
        {data.map((val, index) => (
          <div className="product" key={index}>
            <div className="img icon-circle">
              <i className={val.cover}></i>
            </div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
