import React from 'react';

const Notes = ({notes, removeNote}) => {
    return (
        <ul className="list-group list-group-flush">
            {notes.map(note => (
                <li
                    className="list-group-item note"
                    key={note.id}
                >
                    <strong>{note.text}</strong>
                    <div>
                        <small className="me-3">{note.date}</small>
                        <button
                            type="button"
                            className="btn btn-outline-warning btn-sm"
                            onClick={() => removeNote(note.id)}
                        >&#10060;</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Notes;