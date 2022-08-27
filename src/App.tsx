import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Workspace from './components/Workspace/Workspace';

function App() {
  const [tag, setTag] = useState<string>('Заметки')
  const [searchValue, setSearchValue] = useState<string>('')
  return (
    <div className="App">
      <NavBar setValue={(value) => setSearchValue(value)}/>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <SideBar click={(value: string) => setTag(value)}  />
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
            <Workspace searchValue={searchValue}  tag={tag}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
