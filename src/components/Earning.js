import React from "react";
import { Icon } from "@iconify/react";
import "./Earning.css";

const Earning = () => {
  return (
    <div className="earning-container">
      <div className="earning-sub">
        <h1>
          A <span className="black-head">technology-first</span>{" "}
        </h1>
        <h1>approach to financial </h1>
        <h1>management</h1>
        <strong className="earning-strong">
          Built with security and ease of use in mind.
        </strong>
        <a href="#">Check the documentation &rarr;</a>
      </div>
      <div className="earning-boxes">
        <div className="earning-box">
          <div className="earning-box-icon">
            <Icon className="icon" icon="bx:fast-forward" />
          </div>
          <p>
            <strong>Fast & secure platform</strong>
          </p>
          <p>
            A non-custodian platform for developing operating and using bots.
            open source financial bot free.
          </p>
        </div>
        <div className="earning-box">
          <div className="earning-box-icon">
            <Icon className="icon" icon="bx:line-chart" />
          </div>{" "}
          <p>
            <strong>Earning</strong>
          </p>
          <p>
          Harness the bot Blockchain to power a new era of the financial bot.
          </p>
        </div>
        <div className="earning-box">
          <div className="earning-box-icon">
            <Icon className="icon" icon="bx:bx-show" />
          </div>{" "}
          <p>
            <strong>Open Bot Services</strong>
          </p>
          <p>
          users will be able to purchase services such as image creation and editing, text analysis, translation, and more!
          </p>
        </div>
        <div className="earning-box">
          <div className="earning-box-icon">
            <Icon className="icon" icon="bx:bx-pulse" />
          </div>{" "}
          <p>
            <strong>Crypto Robotics:</strong>
          </p>
          <p>
          Users will be able to train their own bots using OpenAI's API or use the API to create new bots.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Earning;
