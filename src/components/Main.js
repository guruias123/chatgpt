import React from "react";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="main" >
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
        <div >
          <button className="buy-button"
            style={{
              background: "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
              color: "#ffffff",
              boxShadow: "0 10px 20px -10px var(--shadow-color-candy)"
              
            }}
            type="button"
          >
            <div />
            <span>
              <strong><a style={{"color":"#fff"}} href="https://bscdao.gitbook.io/chatgptbsc.com/" target="_blank">Buy Presale Now →</a></strong>
            </span>
          </button>
        </div>
      </div>
      <div className="right-card">
            <div className="right-card-header">
                <div>Presale Stage 1</div>
                <div>Price : $0.02</div>
            </div>
            <div className="right-card-body">
              <h3 style={{"marginTop":"2rem"}}>Presale Stage 1</h3>
              <h3>1 CGPT = $0.02</h3>
              <div className="right-card-body-middle-line" >
              Hurry And Buy Before Stage 2 Price Increases To $0.0026
              </div>

              {/* <div className="progress-bar">
                <div className="progress-bar-value" >

                </div>

              </div> */}

              <div className="stage-progress-bar">
                <div className="stage1">
                    <div className="vector-image">
                    <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint0_linear_4078_1021)"></circle><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint1_linear_4078_1021)"></circle><defs _ngcontent-serverApp-c35=""><linearGradient _ngcontent-serverApp-c35="" id="paint0_linear_4078_1021" x1="-1.7294" y1="4.08968" x2="15.1566" y2="7.41162" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#1A85F8"></stop><stop _ngcontent-serverApp-c35="" offset="0.515625" stop-color="#12CAFB"></stop><stop _ngcontent-serverApp-c35="" offset="1" stop-color="#03CE9A"></stop></linearGradient><linearGradient _ngcontent-serverApp-c35="" id="paint1_linear_4078_1021" x1="-1.22951" y1="7.4998" x2="13.2295" y2="7.4998" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#FFCB16"></stop><stop _ngcontent-serverApp-c35="" offset="0.9999" stop-color="#F47BE5"></stop></linearGradient></defs></svg>
                    </div>
                    <div className="leg" >&nbsp;</div>
                    <span>Stage 1</span>
                </div>

                <div className="stage1">
                    <div className="vector-image">
                    <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint0_linear_4078_1021)"></circle><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint1_linear_4078_1021)"></circle><defs _ngcontent-serverApp-c35=""><linearGradient _ngcontent-serverApp-c35="" id="paint0_linear_4078_1021" x1="-1.7294" y1="4.08968" x2="15.1566" y2="7.41162" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#1A85F8"></stop><stop _ngcontent-serverApp-c35="" offset="0.515625" stop-color="#12CAFB"></stop><stop _ngcontent-serverApp-c35="" offset="1" stop-color="#03CE9A"></stop></linearGradient><linearGradient _ngcontent-serverApp-c35="" id="paint1_linear_4078_1021" x1="-1.22951" y1="7.4998" x2="13.2295" y2="7.4998" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#FFCB16"></stop><stop _ngcontent-serverApp-c35="" offset="0.9999" stop-color="#F47BE5"></stop></linearGradient></defs></svg>
                    </div>
                    <div className="leg" >&nbsp;</div>
                    <span>Stage 2</span>
                </div>

                <div className="stage1">
                    <div className="vector-image">
                    <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint0_linear_4078_1021)"></circle><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint1_linear_4078_1021)"></circle><defs _ngcontent-serverApp-c35=""><linearGradient _ngcontent-serverApp-c35="" id="paint0_linear_4078_1021" x1="-1.7294" y1="4.08968" x2="15.1566" y2="7.41162" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#1A85F8"></stop><stop _ngcontent-serverApp-c35="" offset="0.515625" stop-color="#12CAFB"></stop><stop _ngcontent-serverApp-c35="" offset="1" stop-color="#03CE9A"></stop></linearGradient><linearGradient _ngcontent-serverApp-c35="" id="paint1_linear_4078_1021" x1="-1.22951" y1="7.4998" x2="13.2295" y2="7.4998" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#FFCB16"></stop><stop _ngcontent-serverApp-c35="" offset="0.9999" stop-color="#F47BE5"></stop></linearGradient></defs></svg>
                    </div>
                    <div className="leg" >&nbsp;</div>
                    <span>Stage 3</span>
                </div>

                <div className="stage1">
                    <div className="vector-image">
                    <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint0_linear_4078_1021)"></circle><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint1_linear_4078_1021)"></circle><defs _ngcontent-serverApp-c35=""><linearGradient _ngcontent-serverApp-c35="" id="paint0_linear_4078_1021" x1="-1.7294" y1="4.08968" x2="15.1566" y2="7.41162" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#1A85F8"></stop><stop _ngcontent-serverApp-c35="" offset="0.515625" stop-color="#12CAFB"></stop><stop _ngcontent-serverApp-c35="" offset="1" stop-color="#03CE9A"></stop></linearGradient><linearGradient _ngcontent-serverApp-c35="" id="paint1_linear_4078_1021" x1="-1.22951" y1="7.4998" x2="13.2295" y2="7.4998" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#FFCB16"></stop><stop _ngcontent-serverApp-c35="" offset="0.9999" stop-color="#F47BE5"></stop></linearGradient></defs></svg>
                    </div>
                    <div className="leg" >&nbsp;</div>
                    <span>Stage 4</span>
                </div>

                <div className="stage1">
                    <div className="vector-image">
                    <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint0_linear_4078_1021)"></circle><circle _ngcontent-serverApp-c35="" cx="6" cy="6" r="6" fill="url(#paint1_linear_4078_1021)"></circle><defs _ngcontent-serverApp-c35=""><linearGradient _ngcontent-serverApp-c35="" id="paint0_linear_4078_1021" x1="-1.7294" y1="4.08968" x2="15.1566" y2="7.41162" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#1A85F8"></stop><stop _ngcontent-serverApp-c35="" offset="0.515625" stop-color="#12CAFB"></stop><stop _ngcontent-serverApp-c35="" offset="1" stop-color="#03CE9A"></stop></linearGradient><linearGradient _ngcontent-serverApp-c35="" id="paint1_linear_4078_1021" x1="-1.22951" y1="7.4998" x2="13.2295" y2="7.4998" gradientUnits="userSpaceOnUse"><stop _ngcontent-serverApp-c35="" stop-color="#FFCB16"></stop><stop _ngcontent-serverApp-c35="" offset="0.9999" stop-color="#F47BE5"></stop></linearGradient></defs></svg>
                    </div>
                    {/* <div className="leg" >&nbsp;</div> */}
                    <span>Stage 5</span>
                </div>

              </div>

              <div className="line">
              Sold — $0 / 1,000,000,000
              </div>
              <div className="line">
              USDT Raised — $0 / $2,000,000
              </div>

              <div>
              <div className="button">
                <button className="connect"><a href="#home" style={{"color":"#fff"}}>
                  Buy with Wallet
                  </a></button>
              </div>

              <div className="button">
                <button className="connect"><a href="#home" style={{"color":"#fff"}}>
                  Buy with Card
                  </a></button>
              </div>
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
