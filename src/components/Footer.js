import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-1'>
            <div className='footer-1-sub1'>
           <img src='https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F25921986-5106-4fa8-a487-74eb943384f5%2F2JApjrVeeOmDlXattVJzxlVYeec_Butterfly_Logo_1__1_-removebg_1_.png%3Fbucket%3Ddocument&w=384&q=100' />
                <p><strong>ChatGptBsc</strong></p>
            </div>
            <div className='sub-footer'>
            <div className='footer-1-sub2'>
                <p><strong>Home</strong></p>
                <p>About</p>
                <p>Ai Telegram Bot</p>
                <p>AI Twitter Bot</p>
                <p>AI whats app Bot</p>
                <p>Chrome Extension</p>
                <p>$150k competition</p>     
                <p>GitBook</p>           
            </div>

            <div className='footer-1-sub2'>
            <p><strong>Presale Live</strong></p>
                <p>About ChatGptBsc</p>
                <p>Whitepaper</p>
                <p>Github </p>
                <p><span className='medium'>Medium</span></p>
                <p><span className='twitter'>Twitter</span></p>
            </div>
            </div>
        </div>

        <div className='footer-2'>
        Copyright © 2022 ChatGptBsc, Inc. All rights reserved.
        </div>

        <div className='footer-3'>
        Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
        </div>
    </div>
  )
}

export default Footer