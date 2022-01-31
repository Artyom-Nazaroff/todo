export const SHOW_LOADER = 'SHOW_LOADER';
export const ADD_NOTE = 'ADD_NOTE';
export const FETCH_NOTES = 'FETCH_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const initialState = {
    notes: [],
    loading: false,
};

const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: return {...state, loading: true};
        case FETCH_NOTES: return {...state, notes: action.notes, loading: false};
        case ADD_NOTE: return {...state, notes: [action.note, ...state.notes]};
        case REMOVE_NOTE: return {...state, notes: state.notes.filter(note => note.id !== action.id)};
        default: return state;
    }
};

export default firebaseReducer;

export const showLoaderAC = () => ({type: SHOW_LOADER});
export const fetchNotesAC = (notes) => ({type: FETCH_NOTES, notes});
export const addNoteAC = (note) => ({type: ADD_NOTE, note});
export const removeNoteAC = (id) => ({type: REMOVE_NOTE, id});