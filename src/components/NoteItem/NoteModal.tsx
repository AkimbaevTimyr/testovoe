import { FC } from 'react'
import { makeStyles } from "tss-react/mui";
import { Modal, Box, Typography } from '@mui/material/';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { observer } from 'mobx-react-lite';

const style = {
    position: 'absolute' as 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

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
        marginLeft: 290,
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

interface NoteModalProps {
    id: number;
    open: boolean;
    setOpen: (bool: boolean) => void;
    deleteNote: (id: number) => void;
    handleInputEvent: (e: any) => void;
    text: string | null;
    tag: string;
    handleBlur: () => void;
}

const NoteModal: FC<NoteModalProps> = observer(({ id, open, setOpen, text, tag, deleteNote, handleInputEvent,handleBlur }) => {
    const { classes } = useStyles()

    //при клике на кнопк или вне ее области происходит добавление заметки
    const handleClose = () => {
        setOpen(false)
        handleBlur()
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 300 }} >
                <Box className={classes.box} onBlur={handleClose}>
                    <DeleteForeverIcon onClick={() => deleteNote(id)} className={classes.img} />
                    <Typography   className={classes.text} suppressContentEditableWarning={true} contentEditable onInput={handleInputEvent}>
                        {text}
                    </Typography>
                </Box>
                <Typography className={classes.itemTag}>
                    {tag}
                </Typography>
             </Box>
        </Modal>
    )
})

export default NoteModal