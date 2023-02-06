import React,{useState} from "react";
import Blockchainfirm from "./Blockchainfirm";
import Card from "./Card";
import Earning from "./Earning";
import Featurbrand from "./Featurbrand";
import FeaturedCompanies from "./FeaturedCompanies";
import Main from "./Main";
import Middlecards from "./Middlecards";
import "./Nav.css";
import Product from "./Product";
import Tokenomics from "./Tokenomics";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="nav-header">
      <div className="nav">
        <div className="nav-logo">
          <img
            src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2JApehV4FRLzKBVzUZkXcC7Uznw_Butterfly_Logo_1__1_-removebg_1_.png%3Fbucket%3Ddocument&w=384&q=75"
            alt="logo"
          />
          <span className="nav-head">ChatGptBsc</span>
        </div>

        <div className="nav-options">
          <span>Home</span>
          <span>About</span>
          <select>
            <option>Social</option>
            <option>Telegram</option>
            <option>Whatsapp</option>
          </select>
          <span>Products</span>
          <span>Whitepaper</span>
          <span>$150k Compt</span>
        </div>

        <div className="nav-button">
          <a href="#">Join presale</a>
        </div>
      </div>
      <div className="theme">
        <svg
          viewBox="0 0 20 20"
          height="32"
          width="32"
          fill="currentColor"
          class="ThemeToggler_sun__m2ZO4 ThemeToggler_icon__mrbco"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <Main />
      <Featurbrand />
      <Card />
      <Middlecards />
      <Earning />
      <Product />
      <Tokenomics />
      <Blockchainfirm />
      <FeaturedCompanies />
    </div>
  );
};

export default Nav;
