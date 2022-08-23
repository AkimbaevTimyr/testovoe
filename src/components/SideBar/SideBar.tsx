import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
 
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  menuSliderContainer: {
    width: 250,
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
  },
  listItem: {
    color: "black"
  }
}));

const listItems = [
  {
    listText: "Заметки"
  },
  {
    listText: "Учеба"
  },
  {
    listText: "Английский"
  },
];
const img = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>

const SideBar = () => {
  const {classes} = useStyles();

  return (
    <Box className={classes.menuSliderContainer}>
      <List>
        {listItems.map((el, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {img}
            </ListItemIcon>
            <ListItemText primary={el.listText} />
        </ListItem>
        ))}
      </List>
    </Box>
  );
}


export default SideBar;