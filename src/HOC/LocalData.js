import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {loadAllNotesFromLoacalstore} from '../actions';


const mapDispatchToProps = dispatch => ({
    loadNotes: () => dispatch(loadAllNotesFromLoacalstore()),
})

const LocalDateContainer = connect(null, mapDispatchToProps)(
    ({ loadNotes, children }) => {

        useEffect(()=> {
            loadNotes();
        }, []);
        
        return (
            <div className="container-app">{children}</div>
        )
    }
)

export const LocalData = (Component) => props => {
    return <LocalDateContainer >
        <Component {...props} />
    </LocalDateContainer>
}