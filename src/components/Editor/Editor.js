import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { editNote } from '../../actions';
import EditorStyled from './styles';
import { getTitleNote, getContentNote, getLastEditTime } from '../../selectors';
import { ROUTES} from '../../constants';

export const Editor = ({ editNote, noteId, title, content, lastEditTime, isEdit, history }) => {
    const handleChange = evt => {
        editNote({ noteId, content: evt.target.innerText, title });
        history.push(ROUTES.notes.replace(':noteId?', noteId))
    }
    
    return (
        <EditorStyled>
            <div
                key={lastEditTime}
                className="edit-area"
                onBlur={handleChange}
                contentEditable={isEdit}
                suppressContentEditableWarning={isEdit}
            >
                {content.split('\n').map((chunk, index) => (
                    <p key={index}>{chunk}</p>
                ))}
            </div>
        </EditorStyled>
    )
}

Editor.propTypes = {
   noteId: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   lastEditTime: PropTypes.number.isRequired,
   content: PropTypes.string.isRequired,
   isEdit: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, props) => {
    const { noteId } = props.match.params;
    const title = getTitleNote(state, noteId);
    if (!title) {
        props.history.push(ROUTES.home);
    }
    return {
        title: getTitleNote(state, noteId),
        noteId: noteId,
        title,
        content: getContentNote(state, noteId) || '',
        lastEditTime: getLastEditTime(state, noteId),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editNote: (note) => dispatch(editNote(note)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor))
