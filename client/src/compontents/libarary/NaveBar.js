import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { navbarStyle } from './navebarStyle'

function NaveBar() {
  return (
        <Box borderBottom="1px solid blue" p={3} display={"flex"} justifyContent={"space-between"} >
            <Typography sx={{color:"#22d3ee"}} fontSize="1.2em" fontWeight="800">
                Byte  Tech
            </Typography>
            <Box>
                    <Link style={navbarStyle.link}>Home</Link>
                    <Link style={navbarStyle.link}>About</Link>
                    <Link style={navbarStyle.link}>Blogs</Link>
                    <Link style={navbarStyle.link}>Contact</Link>

            </Box>
        </Box>
  )
}

export default NaveBar