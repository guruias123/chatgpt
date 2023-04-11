import React, { useRef, useEffect, useState } from "react";
import "./Buycgpt.css";
import "./Nav.css";

const Buycgpt = (props) => {
  const [eheight, setEheight] = useState();
  const myElementRef = useRef();
  const [first, setfirst] = useState(0);

  useEffect(() => {
    const height = myElementRef.current.clientHeight;
    console.log("Element height:", height);
    setEheight(height);
    setfirst(first + 1);
    // console.log();
  }, [first]);

  return (
    <div className="buycgpt-container" style={{ color: props.color }}>
      <div className="title-app">
        <div className="text">HOW TO BUY</div>
        <h2 class="title" style={{ color: props.color }}>
          How do you buy CGPT token in the Presale?
        </h2>
      </div>

      <div className="b1">
        <div className="row">
          <div className="col-sm-6">
            <div className="title-app title-app2">
              <div className="text">STEP 1</div>
              <h2 className="title" style={{ color: props.color }}>
                Install Wallet
              </h2>
            </div>

            <div className="item-b1 col-text">
              <h4 className="title">1</h4>
              <div className="content">
                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-family": "arial helvetica sans-serif" }}>
                    <span style={{ "font-size": "20px" }}>
                      To start with, ensure you have a MetaMask wallet installed
                      on your browser in order to connect your wallet to the
                      platform. If you are purchasing on mobile, we recommend
                      using Trust Wallet and connecting through the in built
                      browser
                    </span>
                  </span>
                </p>

                {/* <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-family": "arial,helvetica,sans-serif" }}>
                    <span style={{ "font-size": "20px" }}>
                      If you are purchasing on mobile, we recommend using Trust
                      Wallet and connecting through the in built browser&nbsp;
                    </span>
                  </span>
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="title-app title-app2"
              style={{ "text-align": "right" }}
            >
              <div className="text">STEP 2</div>
              <h2 className="title" style={{ color: props.color }}>
                Connect Wallet
              </h2>
            </div>
            <div className="item-b1 col-text">
              <h4 className="title">2</h4>
              <div className="content">
                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    Once you’ve connected your wallet, you’ll be presented with
                    3 options with which you can purchase Cgpt token. Read below
                    for more information on these three options, and select the
                    option which is right for you.
                  </span>
                </p>

                {/* <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    Read below for more information on these three options, and
                    select the option which is right for you.
                  </span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b2">
        <div className="row">
          <div className="col-sm-4">
            <div className="item-b2">
              <h4 className="title">
                Buy with <b>BNB</b>
              </h4>
              <div className="content col-text2" style={{ height: eheight }}>
                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    <span
                      style={{ "font-family": "arial,helvetica,sans-serif" }}
                    >
                      If you have enough BNB in your wallet, you can use the
                      purchase CGPT with BNB option in order to swap the BNB in
                      your wallet for CGPT. Type in the amount of CGPT you wish
                      to purchase and then click “Convert BNB”. Your wallet
                      provider will ask you to confirm the transaction and will
                      also show you the cost of gas.
                    </span>
                  </span>
                </p>

                {/* <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    <span
                      style={{ "font-family": "arial,helvetica,sans-serif" }}
                    >
                      Type in the amount of DOGO you wish to purchase and then
                      click “Convert ETH”. Your wallet provider will ask you to
                      confirm the transaction and will also show you the cost of
                      gas.
                    </span>
                  </span>
                </p> */}
              </div>
              <a href className="link-b2">
                <span class="img">
                  <img
                    src="https://dogodoge.pet/img_data/images/solidproof-logopng-4289409826119.png"
                    alt="Buy with <b>ETH</b>"
                  />
                </span>
                <span class="text">BUY WITH BNB</span>
              </a>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="item-b2">
              <h4 className="title">
                Buy with <b>USDT</b>
              </h4>
              <div className="content col-text2" ref={myElementRef}>
                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    <span
                      style={{ "font-family": "arial,helvetica,sans-serif" }}
                    >
                      Before you start trading, make sure you have at least $30
                      USDT in your wallet. Enter the amount of CGPT you wish to
                      purchase (minimum 20,000). Click "Convert USDT".
                    </span>
                  </span>
                </p>

                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    <span
                      style={{ "font-family": "arial,helvetica,sans-serif" }}
                    >
                      You will then be asked to approve the purchase twice. The
                      first approval is for the USDT contract and the second
                      approval is for the transaction amount. Please make sure
                      you go through two approval steps to complete the
                      transaction.
                    </span>
                  </span>
                </p>
              </div>
              <a href className="link-b2">
                <span class="img">
                  <img
                    src="https://dogodoge.pet/img_data/images/usdt626051530834.svg"
                    alt="Buy with <b>ETH</b>"
                  />
                </span>
                <span class="text">BUY WITH USDT</span>
              </a>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="item-b2">
              <h4 className="title">
                Buy <b>BNB</b>
              </h4>
              <div className="content col-text2" style={{ height: eheight }}>
                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    <span
                      style={{ "font-family": "arial,helvetica,sans-serif" }}
                    >
                      If you don’t have enough BNB in your wallet to make a
                      purchase, you can use our onramping partner, Transak, in
                      order to buy BNB directly using your card or via a bank
                      transfer.
                    </span>
                  </span>
                </p>

                <p style={{ "text-align": "justify" }}>
                  <span style={{ "font-size": "20px" }}>
                    <span
                      style={{ "font-family": "arial,helvetica,sans-serif" }}
                    >
                      Simply choose your purchase method, go through their
                      simple KYC flow and you’ll be able to make a purchase
                      directly in the widget.
                    </span>
                  </span>
                </p>
              </div>
              <a href className="link-b2">
                <span class="img">
                  <img
                    src="https://dogodoge.pet/img_data/images/solidproof-logopng-6559102143448.png"
                    alt="Buy with <b>ETH</b>"
                  />
                </span>
                <span class="text">BUY BNB WITH CARD</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="b3" style={{ padding: "3rem" }}>
        <div className="title-app title-app2">
          <div className="text">STEP 3</div>
          <h2 className="title">Claim Token</h2>
        </div>

        <div className="row" style={{"display":"flex","justifyContent":"space-around"}}>
          <div className="col-sm-5">
          <div className="nav-logo">
          <img
            src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2JApehV4FRLzKBVzUZkXcC7Uznw_Butterfly_Logo_1__1_-removebg_1_.png%3Fbucket%3Ddocument&w=384&q=75"
            alt="logo"
            style={{"width":"35%"}}
          />
          <span className="nav-head" style={{"fontSize":"3rem"}}>CGPT TOKENS</span>
        </div>
            {/* <img
              src="https://dogodoge.pet/img_data/images/A00A5B36-7CE6-4F94-A86C-5FE031B19883_4_5005_c647768930914.jpeg"
              alt="STEP 3"
              style={{ width: "100%" }}
            /> */}
          </div>

          <div class="col-sm-5">
            <p style={{ "text-align": "justify" }}>
              <span style={{ "font-size": "22px" }}>
                <span style={{ "font-family": "arial,helvetica,sans-serif" }}>
                  <span style={{ "font-size": "24px" }}>
                    Once the public presale ends, you’ll be able to claim your
                    purchased CGPT tokens using the claim page.
                  </span>
                </span>
              </span>
            </p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>
          </div>
        </div>
      </div>

      <div className="b4">
        <div className="title-app title-app2" style={{ "text-align": "right" }}>
          <div className="text">STAGES</div>
          <h2 className="title" style={{ "margin-bottom": "20px" }}></h2>
          <div style={{ color: "#767272" }} class="mota"></div>
        </div>

        <div className="row row2">
          
          <div className="col-5ths col-b4">
            <div className="item-b4 col-text" style={{"height":"190.833px"}}>
              <h4 className="title">Stage 1</h4>
              <div className="content">
                <p style={{"text-align":"center"}}>
                  <strong>
                    <span style={{"font-size":"16px"}}>Total Tokens 1 Billion</span>
                  </strong>
                </p>

                <p style={{"text-align":"center"}}>Per Token Price = $0.002</p>
              </div>
            </div>
          </div>

          <div className="col-5ths col-b4">
            <div className="item-b4 col-text" style={{"height":"190.833px"}}>
              <h4 className="title">Stage 2</h4>
              <div className="content">
                <p style={{"text-align":"center"}}>
                  <strong>
                    <span style={{"font-size":"16px"}}>Total Tokens 500 Million</span>
                  </strong>
                </p>

                <p style={{"text-align":"center"}}>Per Token Price = $0.0026</p>
              </div>
            </div>
          </div>

          <div className="col-5ths col-b4">
            <div className="item-b4 col-text" style={{"height":"190.833px"}}>
              <h4 className="title">Stage 3</h4>
              <div className="content">
                <p style={{"text-align":"center"}}>
                  <strong>
                    <span style={{"font-size":"16px"}}>Total Tokens 500 Million</span>
                  </strong>
                </p>

                <p style={{"text-align":"center"}}>Per Token Price = $0.0033</p>
              </div>
            </div>
          </div>

          <div className="col-5ths col-b4">
            <div className="item-b4 col-text" style={{"height":"190.833px"}}>
              <h4 className="title">Stage 4</h4>
              <div className="content">
                <p style={{"text-align":"center"}}>
                  <strong>
                    <span style={{"font-size":"16px"}}>Total Tokens 500 Million</span>
                  </strong>
                </p>

                <p style={{"text-align":"center"}}>Per Token Price = $0.0042</p>
              </div>
            </div>
          </div>

          <div className="col-5ths col-b4">
            <div className="item-b4 col-text" style={{"height":"190.833px"}}>
              <h4 className="title">Stage 5</h4>
              <div className="content">
                <p style={{"text-align":"center"}}>
                  <strong>
                    <span style={{"font-size":"16px"}}>Total Tokens 500 Million</span>
                  </strong>
                </p>

                <p style={{"text-align":"center"}}>Per Token Price = $0.0054</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buycgpt;
