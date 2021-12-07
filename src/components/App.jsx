import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            // filter everything but the note with the provided id
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;
