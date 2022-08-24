import NoteInput from "../NoteInput/NoteInput";
import { makeStyles } from "tss-react/mui";
import NoteItem from "../NoteItem/NoteItem";
import Container from '@mui/material/Container';
import { useAppContext } from "../../store/store";
import { NoteType } from "../../types/noteTypes";


const useStyles = makeStyles()(() => ({
        workSpace: {
            marginTop: 30
        },
        container: {
            display: "flex",
            justifyContent: 'space-between',
            marginTop: 20,
            flexWrap: "wrap"
        }
    }));
   



const Workspace = () => {
    const {classes} = useStyles()
    const {notes} = useAppContext()
    
  return (
   <div className={classes.workSpace}>
        <NoteInput />

    <Container  className={classes.container} maxWidth="xl">
        {notes.notes.map((el: NoteType) => (
            <NoteItem key={el.id} id={el.id} text={el.text} tag={el.tag}/>
        ))}
    </Container>
      
   </div>
  )
}

export default Workspace;