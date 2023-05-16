import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import { Box, List, ListItem } from '@mui/material';

function Layout() {
  return (
    <Box>
        <List sx={{display: 'flex'}}>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/users">Users</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
        </List>
      <Outlet />
    </Box>
  )
}

export default Layout