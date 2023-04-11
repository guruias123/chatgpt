import React, { useState } from "react";
import { Icon } from "@iconify/react";
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
import Secured from "./Secured";
import Contract from "./Contract";
import Footer from "./Footer";
import Buycgpt from "./Buycgpt";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setburger(!burger)
  };

  const themes = [
    {
      name: "dark",
      background: "#000",
      color: "#fff",
    },
    {
      name: "light",
      background: "#fff",
      color: "#000",
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const [icon, setIcon] = useState(true);
  const [burger, setburger] = useState(true);

  function toggleTheme() {
    setThemeIndex((prevIndex) => (prevIndex + 1) % 2);
    setIcon(!icon);
  }

  const currentTheme = themes[themeIndex];

  return (
    <div
      className="nav-header"
      style={{ background: currentTheme.background, color: currentTheme.color }}
    >
      <div
        className="nav"
        style={{
          background: currentTheme.background,
          color: currentTheme.color,
        }}
      >
        <div className="nav-logo">
          <img
            src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2JApehV4FRLzKBVzUZkXcC7Uznw_Butterfly_Logo_1__1_-removebg_1_.png%3Fbucket%3Ddocument&w=384&q=75"
            alt="logo"
          />
          <span className="nav-head">ChatGptBsc</span>
        </div>

        <div className="nav-options" style={{ background: currentTheme.background, color: currentTheme.color}}>
          <span><a href="#home" style={{ background: currentTheme.background, color: currentTheme.color}}>Home</a></span>
          <span><a href='#About' style={{ background: currentTheme.background, color: currentTheme.color}}>About</a></span>
          <select
            style={{
              background: currentTheme.background,
              color: currentTheme.color,
            }}
          >
            <option>Social</option>
            <option>Telegram</option>
            <option>Whatsapp</option>
          </select>
          <span><a href="#product" style={{ background: currentTheme.background, color: currentTheme.color}}>Products</a></span>
          <span><a href="https://bscdao.gitbook.io/chatgptbsc.com/" target="_blank" style={{color: currentTheme.color}} >Whitepaper</a></span>
          <span>$150k Compt</span>
        </div>

        <div className="nav-button">
          <a className="join" href="#">Join presale</a>
        </div>

        <div className="burger">
          {burger === true ? (
            <Icon
              onClick={() => handleClick()}
              className="burger-icon"
              icon="system-uicons:menu-hamburger"
            />
          ) : (
            <Icon
              onClick={() => handleClick()}
              className="burger-icon"
              icon="radix-icons:cross-2"
            />
          )}
          {isOpen && (
            <div
              className="burger-menu"
              style={{
                background: currentTheme.background,
                color: currentTheme.color,
              }}
            >
              {/* <div className="nav-options-burger"> */}
              <span><a href="#home" style={{ background: currentTheme.background, color: currentTheme.color}}>Home</a></span>
          <span><a href='#About' style={{ background: currentTheme.background, color: currentTheme.color}}>About</a></span>
          <select
            style={{
              background: currentTheme.background,
              color: currentTheme.color,
            }}
          >
            <option>Social</option>
            <option>Telegram</option>
            <option>Whatsapp</option>
          </select>
          <span><a href="#product" style={{ background: currentTheme.background, color: currentTheme.color}}>Products</a></span>
              
              <span>Whitepaper</span>
              <span>$150k Compt</span>

              <a href="#">Join presale</a>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="theme" id="home">
        {icon === false ? (
          <svg
            viewBox="0 0 20 20"
            height="32"
            width="32"
            fill="currentColor"
            class="ThemeToggler_sun__m2ZO4 ThemeToggler_icon__mrbco"
            onClick={toggleTheme}
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 20 20"
            height="32"
            width="32"
            fill="currentColor"
            class="ThemeToggler_moon__0QYFn ThemeToggler_icon__mrbco"
            onClick={toggleTheme}
          >
            <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"></path>
          </svg>
        )}
      </div>
      <Main background={currentTheme.background} color={currentTheme.color} />
      <Featurbrand />
      <Buycgpt background={currentTheme.background} color={currentTheme.color} />
      <Card background={currentTheme.background} color={currentTheme.color}/>
      <Middlecards
        background={currentTheme.background}
        color={currentTheme.color}
      />
      <Earning />
      <Product background={currentTheme.background} color={currentTheme.color}/>
      <Tokenomics />
      <Blockchainfirm />
      <FeaturedCompanies />
      <Secured />
      <Contract />
      <Footer />
    </div>
  );
};

export default Nav;
