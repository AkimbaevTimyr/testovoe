import {
    InputBase,
  } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Container from '@mui/material/Container';
import { FC } from "react";

const useStyles = makeStyles()(() => ({
    container: {
        display: "flex",
        justifyContent: "center"
    },
    input: {
        width: 500,
        border: "1px solid white",
        borderRadius: "5px",
        padding: "5px 5px 5px 10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    }
    }));
   


const NoteInput: FC = () => {
    const {classes} = useStyles()
  return (
    <Container className={classes.container} maxWidth="xl">
        <InputBase className={classes.input} placeholder='Заметка...'/>
    </Container>
  )
}

export default NoteInput