import React, {useContext, useEffect} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <div>
            <div className={'mb-3'} style={{height: 60}}>
                <Alert/>
            </div>
            <Form/>
            <hr/>
            {notes.length
                ?
                (loading
                    ? <Loader/>
                    : <Notes notes={notes} removeNote={removeNote}/>
                )
                :
                <div className={'text-center'}><strong>Здесь ещё нет ни одной заметки</strong></div>}
        </div>
    );
};

export default Home;