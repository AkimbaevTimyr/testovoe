import React, { useState } from 'react'
import { Box, InputBase } from '@mui/material/';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { makeStyles } from "tss-react/mui";
import { useAppContext } from '../../store/store';

const useStyles = makeStyles()(() => ({
  buttonItem: {
    marginLeft: 20
  },
  input: {
    display: "inline-block",
    width: 300,
    padding: "5px 5px 5px 10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
}));

const style = {
  position: 'absolute' as 'absolute',
  top: '45%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



const TagModal = () => {
  const { tags } = useAppContext()
  const [open, setOpen] = useState(false);
  const [tag, setTag] = useState<string>('')
  const { classes } = useStyles()
  const handleOpen = () => {
    setOpen(true);
  };
  //при клике на кнопк или вне ее области происходит добавление заметки
  const handleClose = () => {
    tags.setTag({ tag })
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} className={classes.buttonItem}>Добавить тег</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <InputBase className={classes.input} onChange={e => setTag(e.target.value)} placeholder='Тег...' />
          <Button onClick={handleClose}>Добавить тег</Button>
        </Box>
      </Modal>
    </div>
  );
}

// value={text}
// onChange={(e) => setText(e.target.value)}


export default TagModal