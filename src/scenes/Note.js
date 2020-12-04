import React from 'react'
import {Menu, Editor} from '../components';

const Note = props => (
    <div className="note-page" key={props.match.params.noteId}>
        <Menu />
        <Editor isEdit={false} />
    </div>
)

export default Note
