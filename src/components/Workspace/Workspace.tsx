import NoteInput from "../NoteInput/NoteInput";
import { makeStyles } from "tss-react/mui";
import NoteItem from "../NoteItem/NoteItem";
import Container from '@mui/material/Container';


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
    
  return (
   <div className={classes.workSpace}>
        <NoteInput />

    <Container  className={classes.container} maxWidth="xl">
            <NoteItem /> 
            <NoteItem /> 
            <NoteItem />         
            <NoteItem /> 
            <NoteItem /> 
            <NoteItem /> 
            <NoteItem /> 

            <NoteItem /> 
            
    </Container>
      
   </div>
  )
}

export default Workspace;