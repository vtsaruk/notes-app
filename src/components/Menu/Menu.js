import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuStyled from './styles';
import AddNoteForm from './AddNoteForm';
import ItemMenu from './ItemMenu';
import {getNotesIds} from '../../selectors';
// import 

export const Menu = ({notes}) => {
    return (
        <MenuStyled>
            <AddNoteForm />
            <ul className="menu">
                {notes.map((id => (<ItemMenu noteId={id} key={id} />)))}
            </ul>
        </MenuStyled>
    )
}

Menu.propTypes = {
    notes: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    notes: getNotesIds(state),
})

export default connect(mapStateToProps, null)(Menu)
