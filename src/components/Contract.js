import React from 'react'
import './Contract.css'
import Img from './images/back-img.png'

const Contract = () => {
  return (
    <div className='contract'>
        <div className='contract-img'>
        <img alt="" src="https://api.typedream.com/v0/document/public/25921986-5106-4fa8-a487-74eb943384f5/2JBC2nofvEvzWLETEUKFiNwp63D_ChatGpt.avif?bucket=document"  />
        {/* <img src={Img} /> */}
        </div>
        <div className='contract-desc'>
            <h1>Chatgptbsc Smart Contract</h1>
            <p></p>
            <h3><span className='address'>Address - </span></h3>
            <p><span>Decimal </span><span style={{"fontSize":"2rem"}}>: 18</span></p>
            <p></p>
            <h3><span className='token'>Token Symbol - (BGPT )</span></h3>
            <p></p>
            <button>BUY PRESALE NOW→</button>
        </div>
    </div>
  )
}

export default Contract