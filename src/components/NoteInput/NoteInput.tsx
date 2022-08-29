import {
  InputBase,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Container from '@mui/material/Container';
import { FC, useState } from "react";
import { NoteType } from "../../types/noteTypes";
import { useAppContext } from "../../store/store";

const useStyles = makeStyles()(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  div: {
    width: 500,
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: 10
  },
  input: {
    display: "inline-block",
    width: 500,
    border: "none",
    outline: "none !important",
    padding: "5px 5px 5px 10px",
  },
  textarea: {
    resize: "none",
    width: 495,
    border: 'none',
    padding: "5px 5px 5px 15px",
    "&:focus": {
      outline: "none !important",
      border: "none"
    }
  },
}));



const NoteInput: FC = () => {
  const { notes } = useAppContext()
  const { classes } = useStyles()
  const [text, setText] = useState<string>('')
  const [tag, setTag] = useState<string>("")

  //проверка на существование тега и заметки, если они существуют происходит добавление заметки
  const handleBlur = () => {
    if (text.length != 0 && tag.length != 0) {
      const note: NoteType = {
        id: Number(Date.now()),
        text,
        tag
      }
      notes.setNotes(note)
      setText("")
      setTag("")
    }
  }
  return (
    <Container className={classes.container} maxWidth="sm">
      <div onBlur={handleBlur} className={classes.div}>
        <InputBase value={text} onChange={(e) => setText(e.target.value)} className={classes.input} placeholder='Заметка...' />
        <InputBase className={classes.input} value={tag} onChange={(e) => setTag(e.target.value)} placeholder='Тег...' />
      </div>
    </Container>
  )
}

export default NoteInput