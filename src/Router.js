import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form1 from './Forms/Form1';
import { useLottie } from 'lottie-react';
import BgAnimation from './student-bg.json';
import Box from '@mui/material/Box';

export default function Router(){
    const options = {
        animationData:BgAnimation,
        loop:true,
        play:true
      }
      const {View} =useLottie(options);
    return(
        <div className="router-page">
      <Box    sx={{
        width: 700,
        height: 700,
        position: 'absolute',
        top:0,
        left:0,
        zIndex:-1
      }}>

        {View}


        </Box>
        <div className="route">
 
        <Routes>
            <Route path="/form1" element={<Form1 />} />
            <Route path="/" element={<></>} />
            
        </Routes>

        </div>

        </div>
    )
}