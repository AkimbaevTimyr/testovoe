import React from 'react'
import { Typography, Paper } from '@mui/material';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    item: {
        width: 200,
        height: "fit-content",
        marginRight: 5,
        marginBottom: 20,
        border: "1px solid white",
        borderRadius: "10px",
        padding: 15,
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        "&:hover, &:focus": {
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            scale: "1.01"
        },
        overflowX: "hidden",
        overflowWrap: "break-word",
        wordWrap: "break-word",
    },
    itemTag: {
        width: "fit-content",
        backgroundColor:  "#C0C0C0",
        borderRadius: "15px",
        fontSize: "11px",
        cursor: "pointer",
        padding: "2px 3px 3px 5px",
        "&:hover": {
            scale: "1.05",
        }
    }
    }));
   

const NoteItem = () => {
    const {classes} = useStyles();
  return (
    <Paper className={classes.item}>
        <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sequi volupta
        </Typography>
        <Typography className={classes.itemTag}>
            Английский
        </Typography>
    </Paper>
  )
}

export default NoteItem