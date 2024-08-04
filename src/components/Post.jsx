import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, Grid, IconButton, Typography } from '@mui/material'
import Paellapost from "../../public/images/Paellapost.jpg"
import Agnespost from "../../public/images/Agnespost.jpg"
import BBQpost from "../../public/images/BBQpost.jpg"

const datas = [
  { id:1,
    title: 'Shrimp and Chorizo Paella',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos debitis repellat in quis alias nesciunt, molestiae at minima cum non libero maiores facilis recusandae natus velit praesentium porro culpa necessitatibus.',
    profileIMG:Paellapost,
    imgURL:Paellapost,
  },
  { id:2,
    title: 'Summer BBQ',
    content: 'luptatum totam rerum possimus laudantium. Assumenda, debitis labore dolor id voluptates aliquid a animi impedit voluptas! Mollitia quibusdam animi ipsum corporis laborum ',
    profileIMG:BBQpost,
    imgURL:BBQpost,
  },
  {
      id:3,
    title: 'Agnes Walker',
    content: 'fuga ab non adipisci eius rem expedita, consequatur laudantium quo maxime saepe unde dignissimos vel itaque! Nobis deserunt, labore libero quasi distinctio asperiores quas corrupti, rem inventore fuga quidem recusandae vo',
    profileIMG:Agnespost,
    imgURL:Agnespost,
  },
];

const Post = () => {
  return (
    <Container>
      {datas.map((data) => (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "lightblue" }} aria-label="recipe" image={data.profileIMG} >
            {/* {data.profileIMG} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={data.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        // image={data.backgroundImage}
        image={data.imgURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.content}
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. Lorem, ipsum dolor sit amet consectetur adipisicing elit.  */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          {/* <Favorite /> */}
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  ))}
    </Container>
  )
}

export default Post