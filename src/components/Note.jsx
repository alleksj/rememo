import React from 'react';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';


function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <div class="border"></div>
            <p>{props.content}</p>

            <button onClick={handleClick}>
                <HighlightOffOutlinedIcon />
            </button>

        </div>
    )
}

export default Note;