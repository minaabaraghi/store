import { Paper } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0,maxWidth:'478px' ,margin:'auto'}} elevation={3}>
        <div className='my-3'>
            <MenuIcon/> 
        </div>
    </Paper>)
}

export default Header
