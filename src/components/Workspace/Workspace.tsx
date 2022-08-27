import NoteInput from "../NoteInput/NoteInput";
import { makeStyles } from "tss-react/mui";
import NoteItem from "../NoteItem/NoteItem";
import Container from '@mui/material/Container';
import { useAppContext } from "../../store/store";
import { NoteType } from "../../types/noteTypes";
import { observer } from "mobx-react-lite"
import { FC } from "react";

const useStyles = makeStyles()(() => ({
        workSpace: {
            marginTop: 30
        },
        container: {
            display: "flex",
            marginTop: 20,
            flexWrap: "wrap"
        }
    }));

interface WorkspaceProps {
    tag: string;
    searchValue: string
}

const Workspace: FC<WorkspaceProps> = observer(({tag, searchValue}) => {
    const {classes} = useStyles()
    const {notes} = useAppContext()
    const data = notes.notes.filter(el => tag === "Заметки" && el.text?.toLowerCase().includes(searchValue) ? el : el.tag === tag && el.text?.toLowerCase().includes(searchValue))
    console.log(data)
  return (
   <div className={classes.workSpace}>
        <NoteInput />
    <Container  className={classes.container} maxWidth="xl">
        {data.map((el: NoteType) => (
            <NoteItem key={el.id} id={el.id} text={el.text} tag={el.tag}/>
        ))}
    </Container>
   </div>
  )
})

export default Workspace;