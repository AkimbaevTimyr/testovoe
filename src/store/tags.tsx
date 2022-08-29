import { makeAutoObservable, action, observable } from 'mobx'
import { TagType } from '../types/tagTypes';

export default class TagsStore {
    tags: TagType[];
    constructor() {
        makeAutoObservable(this)
        this.tags = [
            {
                tag: "Заметки"
            },
            {
                tag: "Учеба"
            },
            {
                tag: "Английский"
            },
        ];
    }

    get tag() {
        return this.tags
    }

    setTag(tag: TagType){
        this.tags.push(tag)
    }

}