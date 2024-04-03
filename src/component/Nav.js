import React from 'react'
import './Nav.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Nav() {
  
  return (
    <div className='nav'> 
       <h3 className='nav__user'>Hello Sharukh👋🏻</h3>
    <div>
        <input className='nav__searchbox'  placeholder='Search'/>
      </div>
    </div>
  )
}

export default Nav
