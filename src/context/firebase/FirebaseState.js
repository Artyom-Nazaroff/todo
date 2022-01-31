import React, {useReducer} from 'react';
import {FirebaseContext} from "./firebaseContext";
import firebaseReducer, {initialState, showLoaderAC, fetchNotesAC, addNoteAC, removeNoteAC} from "./firebaseReducer";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({children}) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => {dispatch(showLoaderAC())};

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        const notes = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key,
            }
        });
        dispatch(fetchNotesAC(notes));
    };

    const addNote = async text => {
        const newNote = {
            text,
            date: new Date().toJSON(),
        };
        try {
            const res = await axios.post(`${url}/notes.json`, newNote);
            const note = {
                ...newNote,
                id: res.data.name,
            };
            dispatch(addNoteAC(note));
        } catch (e) {
            throw new Error(e.message);
        }
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch(removeNoteAC(id));
    }


    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchNotes, addNote, removeNote, loading: state.loading, notes: state.notes,
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState;