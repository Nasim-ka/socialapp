import styled from '@emotion/styled';
import {Mail, MenuOutlined, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, CssBaseline, IconButton, InputBase, Menu, MenuItem, Toolbar } from "@mui/material"
import {Typography } from '@mui/material';
import { useState } from 'react';
import Profile from "../../../public/images/RemySharp.jpg"
import { red } from '@mui/material/colors';
const StyledToolbar = styled(Toolbar)(({theme})=>({
  display:"flex",
  justifyContent:"space-between",
  zIndex: theme.zIndex.drawer + 1,
}))
const Search = styled("div")(({theme})=>({
  background:"white",
  padding:"0 10px",
  borderRadius:"10px",
  width:"40%"
}));
const Icons = styled(Box)(({theme})=>({
  display:"none",
   gap:"10px",
   alignItems:"center",
   [theme.breakpoints.up("sm")]:{
    display:"flex"
   }
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
   }
}))
const Navbar = ({ isClosing,setMobileOpen,setIsClosing,mobileOpen }) => {
  const[open,setOpen]=useState(false)
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const drawerWidth = 240;
  return (
    <Box  >
     
      <AppBar
        position="fixed"
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
       <StyledToolbar>
       <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuOutlined />
          </IconButton>
       <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>App</Typography>
      
       <Search><InputBase placeholder='Search ...'/></Search>
       <Icons><Badge badgeContent={6} color="error">
       <Mail/>
      </Badge>
      <Badge badgeContent={8} color="error">
      <Notifications /></Badge>
       <Avatar alt="Remy Sharp" sx={{width:30, height:30}} src={Profile}
       onClick={(e)=>setOpen(true)}
       />
      </Icons>
      <UserBox onClick={(e)=>setOpen(true)}>
      <Avatar alt="Remy Sharp" sx={{width:30, height:30}} src={Profile} />
      <Typography variant='span'>nasim</Typography>
      </UserBox>
       </StyledToolbar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
        </Box>
  )
}

export default Navbar