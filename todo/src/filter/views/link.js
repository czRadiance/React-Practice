import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
    return (
        <span className={'filter ' + (active? 'selected': 'unselected')} 
                onClick={(active? null: (event) => {
                    event.preventDefault();
                    onClick();
                })}> 
            {children}
        </span>
    );
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);