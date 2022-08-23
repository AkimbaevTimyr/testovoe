import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Workspace from './components/Workspace/Workspace';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <SideBar  />
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
            <Workspace />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
