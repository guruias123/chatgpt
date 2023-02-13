import React from "react";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="main">
      <div className="main-header" style={{background:props.background,color:props.color}}>
        {/* <p> */}
        <h1>
          <span className="main-header-1">ChatGptBsc </span>
          <span className="main-header-2">Builds on</span>
        </h1>
        <h1>
          <span className="main-header-2">framework </span>
          <span className="main-header-1">OpenAi.</span>
        </h1>
        {/* </p> */}

        <p>
          ChatGpt Bsc is a Free{" "}
          <strong style={{background:props.background,color:props.color}}>
            Telegram bot, Twitter Bot, Discord, Whats app Etc, that provides,
            User access to
          </strong>{" "}
          ChatGPT and Dall-E Via Chat commands hassle on your end.
        </p>
        <div>
          <button className="buy-button"
            style={{
              background: "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
              color: "#ffffff",
              boxShadow: "0 10px 20px -10px var(--shadow-color-candy)",
              pointerEvents: "none",
              
            }}
            type="button"
          >
            <div />
            <span>
              <strong>Buy Presale Now →</strong>
            </span>
          </button>
        </div>
      </div>
      <div className="right-card">
            <div className="right-card-header">
                <div>Presale Stage 1</div>
                <div>$0.002</div>
            </div>
            <div className="right-card-body">
              <h3 style={{"marginTop":"2rem"}}>Presale Stage 1</h3>
              <h3>1 DOGO = $0.002</h3>
              <div className="right-card-body-middle-line" >
              Hurry And Buy Before Stage 2 Price Increases To $0.0026
              </div>

              <div className="progress-bar">
                <div className="progress-bar-value" >

                </div>

              </div>

              <div className="line">
              Sold — 547,269,654 / 1,000,000,000
              </div>
              <div className="line">
              USDT Raised — $1,094,539 / $2,000,000
              </div>

              <div className="button">
                <button className="connect">Connect Wallet</button>
              </div>

              <div className="button-2">
                <button className="bottom-button but1">HOW TO BUY</button>
                <button className="bottom-button">New to crypto</button>
              </div>

            </div>
      </div>
    </div>
  );
};

export default Main;
