import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography,Divider,ListItem,ListItemText,ListItemAvatar,List } from '@mui/material'
import React from 'react'
import RemySharp from "../../public/images/RemySharp.jpg"
import TravisHoward from "../../public/images/TravisHoward.jpg"
import CindyBaker from "../../public/images/CindyBaker.jpg"
import AgnesWalker from "../../public/images/AgnesWalker.jpg"
import Henderson from "../../public/images/Henderson.jpg"
import Remy from "../../public/images/Remy.jpg"
import Agnes from "../../public/images/AgnesWalker.jpg"
import Howard from "../../public/images/Howard.jpg"
import Cindy from "../../public/images/Cindy.jpg"
const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{ display:{
        xs:"none", sm:"block"} }}>
          <Box position={'fixed'} width={300}>
            <Typography variant='h6' fontWeight={"100"}>Online Friends</Typography>
            <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src={RemySharp} />
  <Avatar alt="Travis Howard" src={TravisHoward} />
  <Avatar alt="Cindy Baker" src={CindyBaker} />
  <Avatar alt="Agnes Walker" src={AgnesWalker}/>
  <Avatar alt="Trevor Henderson" src={Henderson} />
  <Avatar alt="Remy Sharp" src={Remy} />
  <Avatar alt="Travis Howard" src={Howard} />
  <Avatar alt="Cindy Baker" src={Cindy} />
  <Avatar alt="Agnes Walker" src={Agnes.jpg} />
</AvatarGroup>
<Typography variant='h6' fontWeight={"100"} mt={2} mb={2}>Latest Photos</Typography>
<ImageList cols={3} rowHeight={100} gap={3}>
  <ImageListItem>
    <img src="../../public/images/city.jpg" alt={"city"} sx={{height:"100px"}} />
  </ImageListItem>
  <ImageListItem>
    <img src="../../public/images/tea.jpg" alt={"tea"}sx={{height:"100px"}} />
    
  </ImageListItem>
  <ImageListItem>
    <img src="../../public/images/tokyo.jpg" alt={"tokyo"} sx={{height:"100px"}} />
  </ImageListItem>
</ImageList>
<Typography variant='h6' fontWeight={"100"} mt={2}>Latest Conversations</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Remy}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={Howard} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={CindyBaker} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Box>
          </Box>
  )
}

export default Rightbar