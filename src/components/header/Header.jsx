import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="a" sx={{ flexGrow: 1 }}>
            Visión
          </Typography> */}
          <Button component="a" href="#inicio" color="inherit">Inicio</Button>
          <Button component="a" href="#integrantes" color="inherit">Integrantes</Button>
          <Button component="a" href="#mision" color="inherit">Misión</Button>
          <Button component="a" href="#vision" color="inherit">Visión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header