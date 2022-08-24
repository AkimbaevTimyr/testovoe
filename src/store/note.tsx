import {NoteInterface, NoteType} from '../types/noteTypes'
import { makeAutoObservable,  action, observable  } from 'mobx'

export default class NoteStore {
    notes: NoteInterface[];
    constructor(){
        makeAutoObservable(this)
        this.notes = [
            {id: 1, text: 'Убраться дома', tag: 'Домашние дела'},
            {id: 1, text: 'Убраться дома е дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fе дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fе дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0f', tag: 'Домашние дела'},
            {id: 1, text: 'Убраться де дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fома', tag: 'Домашние дела'},
            {id: 1, text: 'Убраться е дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fе дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fе дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fе дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fдома', tag: 'Домашние дела'},
            {id: 1, text: 'Убратьсе дела jndasssssssssssssssssssssssssssssssssssssssoop   23fokp[ko[0fя дома', tag: 'Домашние дела'},
            
        ];
    }       
   
    get note(){
        return this.notes
    }

    setNotes(note: NoteType){
        this.notes.push(note)
    }
}