import React from 'react'
import './Overviewblock.css';


function Overviewblock({img,title,value,desc}) {
  return (
    
    <div className='overviewblock'>
        <div>
        <img className='overviewblock_img' src={img}/>
       </div>
        <div className='overview__detail'>
            <small>{title}</small>
            <strong>{value}</strong>
            <small>{desc}</small>
        </div>
     
    </div>
  )}

  export default Overviewblock;

