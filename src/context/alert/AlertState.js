import React, {useReducer} from 'react';
import {AlertContext} from "./alertContext";
import alertReducer, {hideAlertAC, initialState, showAlertAC} from "./alertReducer";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const show = (text, alertType) => dispatch(showAlertAC(text, alertType));

    const hide = () => dispatch(hideAlertAC());

    return (
        <>
            <AlertContext.Provider value={{show, hide, alertState: state}}>
                {children}
            </AlertContext.Provider>
        </>
    );
};

export default AlertState;