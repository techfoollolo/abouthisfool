import React, { ReactElement } from 'react'
import AstronotAnime from '../../lottiefileData/Astronot/AstronotAnime';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";

function NavBarListItem(text, anime) {
    const thisLink ="/"+ text;
    
    return (
    <Link to={thisLink}>
          <ListItem disablePadding>
          <ListItemButton>

            <ListItemIcon>
                {anime}
              {/* {index % 2 === 0 ? <AstronotAnime /> : <FileSearchingAnime />} */}
            </ListItemIcon>
            <ListItemText primary={text} />

          </ListItemButton>
        </ListItem>
    </Link>
  )
}

export default NavBarListItem