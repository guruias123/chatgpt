import React from 'react'
import './Tokenomics.css'

const Tokenomics = () => {
  return (
    <div className='tokenomics-container'>
        <h3>Tokenomics👇</h3>
        <p className='token-desc-head'>Our 3% fees are used for the continuous development of the ChatGptBsc and for supporting  Research.</p>

        <div className='tokenomics-boxes'>
            <div className='tokenomics-box'>
                <span className='tokenicon'>🛠</span>
                <p className='token-head'>
                    <strong>
                        <span>Development</span>
                    </strong>
                </p>
                <p className='token-desc'>
                    Covers costs related to maintenance improvements of the ChatGptBsc
                </p>
            </div>
            <div className='b tokenomics-box'>
                <p className='tokenicon'>👩‍💻</p>
                <p className='token-head'>
                    <strong>
                        <span>Marketing</span>
                    </strong>
                </p>
                <p className='token-desc'>
                Setting up a cozy & productive workspace, with budget-friendly items                </p>
            </div>
            <div className='c tokenomics-box'>
                <p className='tokenicon'>📹</p>
                <p className='token-head'>
                    <strong>
                        <span>API Enhancement</span>
                    </strong>
                </p>
                <p className='token-desc'>
                you can paste the command below into your terminal to run your first API request. Make sure to replace YOUR_API_KEY with your secret API key.                </p>
            </div>
        </div>
    </div>
  )
}

export default Tokenomics