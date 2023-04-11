import React from "react";
import { Icon } from "@iconify/react";
import "./Card.css";
import "../css/icon-font.css";

const Card = (props) => {
  return (
    // <div>
      <div className="Cards" id="About">
        <div className="Card-left" style={{background:props.background,color:props.color}}>
          <div className="card-left-icon">
            <Icon className="icon" icon="bx:arrow-from-top" />
          </div>

          <h3 className="card-left-heading">About ChatGptBsc</h3>

          <p>
            <span className="card-left-para" >
              ChatGptBsc is the first utility token for AI and robotics. It will
              be used to create the first bot services on Open AI, create crypto
              robots, train API models, and much more in the future.
            </span>
          </p>
          <p></p>
          <img
            className="card-left-img"
            src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2J8IfuIS4ri8lG6Abn34PBbYth3_82678-ai-messenger_1_.gif%3Fbucket%3Ddocument&w=1920&q=100"
            alt="card-left"
          />
        </div>

        <div className="Card-right">
          <div className="card-right-icon">
            <Icon className="right-icon" icon="bxs:credit-card-alt" />
          </div>
          <div>
            <p className="right-card-head">Artificial</p>
            <p className="right-card-head">General</p>
            <p className="right-card-head">Intelligence </p>
          </div>

          <p style={{"color":"#fff","fontSize":"2rem","lineHeight":"1.4"}}>
            Artificial General Intelligence AGI has been an exciting prospect
            for decades, and now it's finally here! ChatGptBsc is the first AI
            platform to combine the power of artificial intelligence with
            blockchain technology. Our interface allows you to build bots that
            respond to queries in natural language, analyze images, and even
            create music. We're not just talking about AI—we're also building a
            platform to provide open-source services for everyone in the
            cryptocurrency community.
          </p>

          <img
            className="card-left-img"
            src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2J8NRP3YpmrGYC0pEyZOXZziKxV_79793-guy-talking-to-robot-ai-help_1_.gif%3Fbucket%3Ddocument&w=750&q=100"
            alt="card-left"
          />

        </div>
      </div>
    // </div>
  );
};

export default Card;
