import React, { FC, SyntheticEvent, useState } from 'react'
import { Typography, Paper, Box } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppContext } from '../../store/store';
import { NoteType } from '../../types/noteTypes';
import NoteModal from './NoteModal';
import { observer } from 'mobx-react-lite';


const useStyles = makeStyles()(() => ({
    item: {
        width: 200,
        height: "fit-content",
        marginRight: 20,
        flex: "1 1 33.3333",
        border: "1px solid white",
        borderRadius: "10px",
        padding: 15,
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        "&:hover, &:focus": {
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            scale: "1.01",
        },
        overflowX: "hidden",
        overflowWrap: "break-word",
        wordWrap: "break-word",
    },
    itemTag: {
        maxWidth: "100px",
        width: "fit-content",
        backgroundColor: "#C0C0C0",
        borderRadius: "15px",
        fontSize: "11px",
        cursor: "pointer",
        padding: "2px 3px 3px 5px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "&:hover": {
            scale: "1.05",
            img: {
                display: "block"
            }
        }
    },
    img: {
        cursor: "pointer",
        marginLeft: 180,
        marginTop: -40,
    },
    text: {
        width: 180,
        marginTop: "-25px"
    },
    box: {
        display: "block",
        alignItems: 'center',
    },
    input: {
        display: "inline-block",
        width: 300,
        padding: "5px 5px 5px 10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
}));

//интерфейс для event получаемого в резутате редактирования заметки
interface FormEvent<T = Element> extends SyntheticEvent<T> {
}

const NoteItem: FC<NoteType> = observer(({ id, text, tag }) => {
    const { notes } = useAppContext()
    const { classes } = useStyles();
    const [value, setValue] = useState<string | null>('')
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(true);
    };
    //добавление заметки после клика вне ее области
    const handleBlur = () => {
        if(value?.length != 0){
            notes.updateNote(id, value)
        }
    }
    const handleInputEvent = (e: FormEvent<HTMLFormElement>) => {
        setValue(e.currentTarget.textContent)
    }
    //удаление заметки
    const deleteNote = (id: number) => {
        notes.deleteNote(id)
    }
    return (
        <Paper className={classes.item} onClick={handleOpen}>
            <Box className={classes.box} >
                <DeleteForeverIcon onClick={() => deleteNote(id)} className={classes.img} />
                <Typography className={classes.text} suppressContentEditableWarning={true} onBlur={handleBlur} >
                    {text}
                </Typography>
            </Box>
            <Typography className={classes.itemTag}>
                {tag}
            </Typography>
            <NoteModal setOpen={(bool) => setOpen(bool)} open={open} text={text} tag={tag} id={id} deleteNote={(id)=> deleteNote(id)} handleInputEvent={(e)=> handleInputEvent(e)} handleBlur={()=> handleBlur()}/>
        </Paper>
    )
})

export default NoteItem


