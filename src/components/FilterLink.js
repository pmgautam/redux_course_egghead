import {connect} from "react-redux";
import React from "react";
import {setVisibilityFilter} from "../actions";

const Link = ({
                  active,
                  children,
                  onClick
              }) => {

    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href="#"
           onClick={(e) => {
               e.preventDefault()
               onClick()
           }}
        >{children}</a>
    )
}

const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }


    }
}

export default connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

