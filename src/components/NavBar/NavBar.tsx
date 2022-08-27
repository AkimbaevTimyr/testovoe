import {FC} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBox from '../SearchBox/SearchBox';


interface NavBarProps {
  setValue: (value: string) => void;
}

const NavBar: FC<NavBarProps> = ({setValue}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ alignItems: 'center', display: 'flex'  }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            KEEP
          </Typography>
            <SearchBox setValue={setValue}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar;