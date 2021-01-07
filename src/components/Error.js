import React from 'react';
import Alert from 'react-bootstrap/Alert'

function Error({type, message}) {
    return (
        <Alert variant={type || "success"}>
            {message}
        </Alert>
    );
}

export default Error;