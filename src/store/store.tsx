import { createContext, useContext } from "react";
import NoteStore from "./note";
import TagsStore from "./tags";


//Создание стора
const RootStore = {
    notes: new NoteStore(),
    tags: new TagsStore(),
}

// Создание контекста и функции для получения данных из контекста
export const Context = createContext(RootStore);
export const useAppContext = () => useContext(Context)


type Props = {
    children: React.ReactNode;
};

//Создание функции возвращающей контекст провайдер для обертки App
export function StoreProviderContext({children}: Props) {
    return (
        <Context.Provider value={RootStore}>
            {children}
        </Context.Provider>
    )
}

