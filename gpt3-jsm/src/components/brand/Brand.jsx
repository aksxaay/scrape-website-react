import React from 'react'
import './brand.css';

import {instagram, twitter, behance, discord} from './imports.js'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gp3__image">
        <img src={instagram} />
      </div>
      <div className="gp3__image">
        <img src={twitter} />
      </div>
      <div className="gp3__image">
        <img src={behance} />
      </div>
      <div className="gp3__image">
        <img src={discord} />
      </div>
      
    </div>
  )
}

export default Brand
