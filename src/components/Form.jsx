import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const Form = () => {
    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext);
    const {addNote} = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();
        if (value.trim()) {
            addNote(value.trim()).then(() => {
                show('Создана новая заметка', 'success');
            }).catch(() => {
                show('Что-то пошло не так...', 'danger');
            });
            setValue('');
        } else {
            show('Введите текст', 'warning');
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={'Введите текст...'}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </form>
    );
};

export default Form;