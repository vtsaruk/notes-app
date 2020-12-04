import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import {ROUTES} from '../../constants';
import {deleteNote} from '../../actions';
import { getTitleNoteFactory } from '../../selectors';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';




export const ItemMenu = ({ noteId, title, history, activeNoteId, deleteNote }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = () => history.push(ROUTES.notes.replace(':noteId?', noteId));
    const handleClickEdit = (evt) => {
        evt.stopPropagation();
        history.push(ROUTES.edit.replace(':noteId?', noteId));
        handleClickCloseMenu();
    }
    const handleClickDelete = () => {
        deleteNote({noteId})
        history.push(ROUTES.home)
    };
    const handleClickOpenMenu = (evt) => {
        setAnchorEl(evt.currentTarget);
    };
    const handleClickCloseMenu = (evt) => {
        setAnchorEl(null);
    };
    const isActive = activeNoteId === noteId;
    
    
    return (
        <li
            key={noteId}
            onClick={handleClick}
            className={`title-note${isActive ? ' active' : ''}`}
        >
            <span>{title}</span>
            {isActive ?
                <Fragment>
                    <Button onClick={handleClickOpenMenu}>
                        <MoreVertIcon />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClickCloseMenu}
                    >
                        <MenuItem onClick={handleClickEdit}>Edit</MenuItem>
                        <MenuItem onClick={handleClickDelete}>Delete</MenuItem>
                    </Menu>
                </Fragment>: null
            }
        </li>
    )
}

ItemMenu.propTypes = {
   noteId: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => {
    const getTitleNote = getTitleNoteFactory();
    const activeNoteId = props.match.params.noteId;
        return () => ({
        title: getTitleNote(state, props.noteId),
        activeNoteId,
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (nodeId) => dispatch(deleteNote(nodeId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemMenu))
