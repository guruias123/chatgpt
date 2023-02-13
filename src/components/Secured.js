import React from 'react'
import './Product.css'
import './Secured.css'
import { Icon } from '@iconify/react';

const Secured = () => {
  return (
    <div>
         <div className="products">
        <div className="products-list list">
          <div className="products-list-icon-head">
            <Icon className="icon" icon="bxl:digitalocean" />
          </div>
          <h3>Secured By </h3>
          <p>Our Cloud and infrastructure security are Powerfully secured by the Digital Ocean. it maintains a watch 24*7 Detects vulnerability in time to prevent Harm to our Security Key.</p>
          
        </div>
        <div className="products-list list">
          <div className="products-list-icon-head">
            <Icon className="icon" icon="bxl-aws" />
          </div>
          <h3>Secured By AWS</h3>
          <p>
          We use the most reliable and secure infrastructure by aws. All of the first Data Exchange happened Through SSL using TLS 1.0 and sensitive Data is Secured and stored with AES-256 Encryption.
          </p>
        </div>
        <div className="products-list list">
          <div className="products-list-icon-head">
            <Icon className="icon" icon="bx-cloud-light-rain" />
          </div>
          <h3>DDOS Prevention by Cloudflare</h3>
          <p>
          Our experts will keep you online 24/7/365 no matter the size, type, or duration of the attack. Keep your site running fast and revenue growth with our easy-to-use tools.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Secured