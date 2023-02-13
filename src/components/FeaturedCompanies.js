import React from "react";
import "@fontsource/space-mono";
import "./FeaturedCompanies.css";
import img from "./images/back-img.png";

const FeaturedCompanies = () => {
  return (
    <div className="companies-container">
      <p className="company-showoff" style={{ fontFamily: "Space Mono" }}>
        sowing the seeds of a better tomorrow.
      </p>

      <div className="companiew-row-one">
        <div className="row-one-elements">
          <div>
            <img
              alt=""
              src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2J9CJ1TIePdwqwV9ugfyEbnwvt6_2IzzKYp1oXKXSRC9A1CjirzVAjR_download-4.avif?bucket=document"
            />
            <span>Sequoia.com</span>
          </div>
          <div>
            <img
              alt=""
              src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2J9CoPYp9iwc0n9p1k9wOm74Tpf_2IzynQjpAhu3BbJqcANKEfWSvL1_download-1.avif?bucket=document"
            />
            <span>coinbase.com</span>
          </div>
          <div>
          <img alt="" src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2J9CqtHDqjcrzz8TCstEKjGEJ3E_2Izyvnc0qH1AfXRQAHvvi9vU6rY_download-2.avif?bucket=document" />
            <span>Amazon.com</span>
          </div>
        </div>
        <div className="row-one-elements">
          <div>
            <img
              alt=""
              src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2J9Cyyj0HzN6aE2U9kS0Hvhompw_2Izz6gZa6OwZX4YwJg9R1b4Q0zv_P5_500f5c8aea5f7ed145bc.avif?bucket=document"
            />
            <span>Binance.com</span>
          </div>
          <div>
            <img
              alt=""
              src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2J9D7h3wEcJxBREVveDFDPKyPUS_2IzzBeZfV2VdrGdiaUOUgGc6Urx_P4_99ba09822f9180a1024a.avif?bucket=document"
            />
            <span>Digitalocean.com</span>
          </div>

          <div className="last-logo">
            <img
              alt=""
              src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2J9DAkPwTFZiExTh0dRkIz3c6th_2IzzGazjJa02z4djxpZrDBi02lu_download-3.avif?bucket=document"
            />
            <span>Antler.comv</span>
          </div>
        </div>
        <div></div>
      </div>

      {/* <div className='companiew-row-two'>

        </div> */}
    </div>
  );
};

export default FeaturedCompanies;
