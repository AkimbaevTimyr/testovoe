import {NoteType} from '../types/noteTypes'
import { makeAutoObservable,  action, observable  } from 'mobx'

export default class NoteStore {
    notes: NoteType[];
    constructor(){
        makeAutoObservable(this)
        this.notes = [
            {id: 1, text: 'Убраться дома', tag: 'Учеба'},
            {id: 2, text: 'Убраться дома', tag: 'Английский'},
        ];
    }       
   
    get note(){
        return this.notes
    }
    //добавление заметки
    setNotes(note: NoteType){
        this.notes.push(note)
    }
    //обновление заметки
    updateNote(id: number, text: string | null){
        this.notes.map((el) => (
            el.id == id ? {el: {...el, text}} : el
        ))
    }
    //удаление заметки
    deleteNote(id: number){
        this.notes = this.notes.filter((el) => (
            el.id !== id
        ))
    }
}