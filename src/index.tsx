import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteStore from './store/note';
import { StoreProviderContext } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProviderContext>    
    <App />
  </StoreProviderContext>

);

