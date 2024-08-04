import {theme} from "../src/components/theme"
import { ThemeProvider} from '@mui/material/styles';
import Navbar from './components/header/Navbar';
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, createTheme } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
 const App = () => {
  const[mode,setMode]=useState("light")
const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})
  return (
  <>

<ThemeProvider theme={darkTheme}> 
<Box bgcolor={"background.default"} color={"text.primary"}>
{/* <Navbar/> */}
<Stack direction={"row"} spacing={2} justifyContent={"space-between"} mt={"70px"}>
<Sidebar setMode={setMode} mode={mode}/>
<Feed/>
<Rightbar/>
</Stack>
<Add/>
</Box>


 </ThemeProvider>
    </>
  )
}
export default App
