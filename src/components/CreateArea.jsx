import React, { useState } from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    // States
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isCreateVisible, setIsCreateVisible] = useState(false);

    // Functions
    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

    function handleAdd() {

        setIsCreateVisible(!isCreateVisible);
    }

    // Rendering
    return (
        <div>
            {isCreateVisible ? <div>
                <div className="fabStyle">
                    <Fab onClick={handleAdd}>
                        <ClearIcon style={{ fontSize: 50 }} />
                    </Fab>
                </div>
                <form className="create-note" >
                    <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />
                    <div class="border"></div>
                    <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content} />
                    <Zoom in={true}>
                        <Fab onClick={submitNote}>
                            <AddRoundedIcon />
                        </Fab>
                    </Zoom>
                </form>
            </div> : <div className="fabStyle">
                <Fab onClick={handleAdd}>
                    <AddRoundedIcon style={{ fontSize: 50 }} />
                </Fab>
            </div>}
        </div>
    );
}

export default CreateArea;
