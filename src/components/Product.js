import React from "react";
import { Icon } from "@iconify/react";
import "./Product.css";

const Product = (props) => {
  return (
    <>
      {/* <div className="product-container"> */}
        <div className="products-desc">
        <h2 className="p-c-pre-heading">
          Start growing with <span>ChatGptBsc</span>
        </h2>
        <p>
          The ChatGPT BSC Token is a{" "}
          <span className="utility">utility token</span> that can be used to
          purchase{" "}
        </p>
        <p>
          services and access <span className="openai">OpenAI's</span> AI bots.
        </p>
        <button><a href="https://bscdao.gitbook.io/chatgptbsc.com/" target="_blank" style={{"color":"#fff"}}>Buy Presale Now →</a></button>
        <div className="product-title" id="product">
          <h1>
            Products of <span>ChatGptBsc </span>
          </h1>
          <p> 💎</p>
        </div>
      </div>
      {/* </div> */}
      <div className="products">
        <div className="products-list">
          <div className="products-list-icon-head">
            <Icon className="icon" icon="bx:bx-stats" />
          </div>
          <h3>Open Bot Services </h3>
          <p>Telegram bot</p>
          <p>Twitter bot </p>
          <p>Discord Bot</p>
          <p>Slack Bot production</p>
          <p>What's app Bot</p>
        </div>
        <div className="products-list">
          <div className="products-list-icon-head">
            <Icon className="icon" icon="bxs:note" />
          </div>
          <h3>Crypto Robotics.</h3>
          <p>
            Investment robots are digital platforms that provide automated,
            algorithm-driven financial services with almost no human
            supervision.
          </p>
        </div>
        <div className="products-list">
          <div className="products-list-icon-head">
            <Icon className="icon" icon="bxs:pen" />
          </div>
          <h3>Trained API Models </h3>
          <p>
            uses API keys for authentication. Visit the API Keys page to
            retrieve the API key you will use in your requests.
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
