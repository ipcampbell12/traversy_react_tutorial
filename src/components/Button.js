import React from 'react';
import PropTypes from 'prop-types'

//destructurign props 
//can pass function as argument prop
function Button({ color, text, onClick }) {

    return (
        <button onClick={onClick}
            style={{ backgroundColor: color }}
            className="btn">
            {text}
        </button>
    );
}

Button.defaulProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;