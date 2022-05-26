import React from 'react'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import GridViewIcon from '@mui/icons-material/GridView'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Header () {
  return (
    <Box
      component='header'
      sx={{
        boxShadow: 'rgb(218 220 224) 0px -1px 0px 0px inset',
        p: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant='text'
          sx={{ borderRadius: '50%', width: 48, height: 48, minWidth: 48 }}
        >
          <MenuIcon sx={{ color: '#5f6368' }} />
        </Button>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcSet="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x ,https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x"
          alt="logo"
          aria-hidden="true"
          style={{
            width: 40,
            height: 40,
            marginRight: 8
          }}
        />
        <Typography sx={{ fontSize: 22, color: '#5f6368' }}>Notes</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant='text'
          sx={{ borderRadius: '50%', width: 48, height: 48, minWidth: 48 }}
        >
          <SearchIcon sx={{ color: '#5f6368' }} />
        </Button>
        <Button
          variant='text'
          sx={{ borderRadius: '50%', width: 48, height: 48, minWidth: 48 }}
        >
          <RefreshIcon sx={{ color: '#5f6368' }} />
        </Button>
        <Button
          variant='text'
          sx={{ borderRadius: '50%', width: 48, height: 48, minWidth: 48 }}
        >
          <GridViewIcon sx={{ color: '#5f6368' }} />
        </Button>
        <Button
          variant='text'
          sx={{ borderRadius: '50%', width: 48, height: 48, minWidth: 48 }}
        >
          <SettingsIcon sx={{ color: '#5f6368' }} />
        </Button>
      </Box>
    </Box>
  )
}

// TODO: Read https://material.io/design/layout/understanding-layout.html#layout-anatomy
// TODO: reuse code
// TODO: add profile component
// TODO: Learn srcset

export default Header
