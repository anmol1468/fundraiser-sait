import React from 'react'
import '../../index.scss'
import { Link } from "react-router-dom";

function Option({num, description, link}) {
  return (
    <div className='option'>
      <div className="option__num">Option {num}</div>
      <div className="option__description">{description}</div>
      <div className="option__forward">
        {/* <Link to="/"><button>Select Option</button></Link> */}
        <a href={link} target="_blank"><button>Select Option</button></a>
      </div>
    </div>
  )
}

export default Option