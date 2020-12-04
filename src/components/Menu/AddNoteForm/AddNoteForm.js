import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addNote} from '../../../actions';
import {parserForm} from '../../../utils/parserForm';
import AddNoteFormStyled from './styles.js';

export const AddNoteForm = ({addNote}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addNote(parserForm(evt));
        evt.target.reset();
    }
    return (
        <AddNoteFormStyled>
            <form onSubmit={handleSubmit} className="user-form">
                <input name="title" placeholder="title note" required />
                <button>Add note</button>
            </form>
        </AddNoteFormStyled>
    )
}

AddNoteForm.propTypes = {
    addNote: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (data) => dispatch(addNote(data)),
    }
}

export default connect(null, mapDispatchToProps)(AddNoteForm)
