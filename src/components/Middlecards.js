import React from "react";
import "./MIddlecards.css";

const Middlecards = (props) => {
  return (
    <div className="Middlecards-container">
      <h1>ChatGpt Bsc Software that </h1>
      <h1>
        <span className="acce">accelerates</span> your growth.
      </h1>

      <div className="M-D-sub-head">
        <p>
          <strong style={{"color":"#6b6f76"}}>Our Mission is to Ensure That</strong> <strong>Artificial General Intelligence insights</strong>
        </p>
        <p><strong>Benefit all humanity.</strong></p>
      </div>

      <div className="M-D-sub-head1">
        <p ><span>ChatGptBsc</span> conducts fundamental, long-term</p>
        <p>Research toward the creation of safe AGI.</p>
      </div>

      <div className="Middlecards-container-flex">
        <div className="flex flex1" style={{background:props.background,color:props.color}}>
            <img src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2J8unDCfprhXWBXb0rH6ASDm0X8_120945-actable-ai-landing-page-animation.gif%3Fbucket%3Ddocument&w=828&q=100" alt="flex-img" />
            <p>Goals of Ai Implementation on Open aI.</p>
            <span>Ensure that artificial general intelligence benefits all of humanity.</span>
            <a href="#">Learn more &rarr;</a>
        </div>
        <div className="flex flex2" style={{background:props.background,color:props.color}}>
            <img src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2J8uvfi1OVX34mSJICXUrqvz4cN_83603-artificial-intelligence-ai.gif%3Fbucket%3Ddocument&w=1920&q=100" alt="flex-img" />
            <p>Creating Image From Text</p>
            <span style={{"color":"#6b6f76"}} >ChatGptBsc is more than just another cryptocurrency: it's a revolution in bot creation, offering you everything from image recognition capabilities to music production tools. You can even train your own chatbot models using our API!</span>
            <a href="#">Learn more &rarr;</a>
        </div>
        <div className="flex flex3" style={{background:props.background,color:props.color}}>
            <img src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2J8v716KKmeOXIeolmu8Lg7LCrG_111575-api-testing.gif%3Fbucket%3Ddocument&w=1920&q=100" alt="flex-img" />
            <p className="highlight-text" >Application Programming Interface</p>
            <span >The OpenAI API is what allowed the creation of our bot, and can be used for much More.</span>
            <a href="#">Learn more &rarr;</a>
        </div>

      </div>
    </div>
  );
};

export default Middlecards;
