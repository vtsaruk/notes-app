import React from 'react'
import {Menu, Editor} from '../components';

const EditNote = props => (
    <div className="note-edit-page">
        <Menu />
        <Editor isEdit={true} />
    </div>
)

export default EditNote
