import {
    InputBase,
  } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Container from '@mui/material/Container';
import { FC, useState } from "react";
import { NoteType } from "../../types/noteTypes";
import { useAppContext } from "../../store/store";
import {useEffect, useRef} from 'react'

const useStyles = makeStyles()(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap',
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
  const inputRef = useRef<HTMLHeadingElement>(null)
    // useEffect(() => {
    //     document.addEventListener('click', (e: any) => {
    //         if (inputRef.current == null) {
    //         }
    //     })
    // }, [])
    const {notes} = useAppContext()
    const {classes} = useStyles()
    const [text, setText] = useState<string>('')

    const handleBlur = () =>{
      if(text.length != 0){
        const note: NoteType = {
          id: Number(Date.now()),
          text,
          tag: ""
        }
        notes.setNotes(note)
        setText("")
      }
    }
  return (
    <Container  ref={inputRef} className={classes.container} maxWidth="xl">
        <InputBase value={text} onBlur={handleBlur} onChange={(e)=> setText(e.target.value)} className={classes.input} placeholder='Заметка...'/>
    </Container>
  )
}

export default NoteInput