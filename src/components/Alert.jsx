import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

const Alert = () => {
    const {alertState, hide} = useContext(AlertContext);

    if (!alertState.visible) {
        return null;
    }

    return (
        <div className={`alert alert-${alertState.alertType} alert-dismissible fade show`}>
            {alertState.text}
            <button type="button" onClick={hide} className="btn-close" aria-label="Close"/>
        </div>
    );
};

export default Alert;