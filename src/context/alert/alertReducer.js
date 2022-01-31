export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const initialState = {
    visible: false,
    alertType: '',
    text: '',
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT: return { ...state, visible: true, alertType: action.alertType, text: action.text};
        case HIDE_ALERT: return { ...state, visible: false};
        default: return state;
    }
};

export default alertReducer;

export const showAlertAC = (text, alertType) => ({type: SHOW_ALERT, text, alertType});
export const hideAlertAC = () => ({type: HIDE_ALERT});