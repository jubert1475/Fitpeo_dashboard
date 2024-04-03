import React from 'react'
import './Sidebar.css'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div>
        
      <div className='sidebar_heading'>
        <TokenOutlinedIcon style={{fontSize:'45px', fontWeight:"100"}}/>
       
        <h1>Dashboard</h1>
      </div>

      <div className='sidebar_options'><GridViewRoundedIcon /><h4>Dashboard       </h4></div>
      <div className='sidebar_options'><Inventory2OutlinedIcon/><h4>Products</h4></div>
      <div className='sidebar_options'><AccountBoxOutlinedIcon/><h4>Costomers</h4></div>
      <div className='sidebar_options'><AccountBalanceWalletOutlinedIcon/> <h4>Income</h4></div>
      <div className='sidebar_options'><PercentOutlinedIcon/> <h4>Promote</h4></div>
      <div className='sidebar_options'><HelpCenterOutlinedIcon/> <h4>Help</h4></div>

      </div>
      <div className='sidebar_PM'>
        <div>
          <img  className='sidebar_PM_img' src='https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png' />
          </div>
          <div className='sidebar_PM_name'>
            <h5 >Juber Tamboli</h5>
            <h5>Project Manager</h5>
          </div>
        
      </div>
    </div>
  )
}

export default Sidebar
