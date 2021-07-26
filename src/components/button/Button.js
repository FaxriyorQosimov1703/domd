import React from 'react'
import './button.css'

const STYLES = ['btn-yellow', 'btn-orange', ];
const HOVER = ['hover-white', 'btn-orange']
function Button({children, buttonStyle, buttonHover}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ?  buttonStyle : STYLES[0];
    const checkButtonHover = HOVER.includes(buttonHover) ? buttonHover : HOVER[1];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonHover}`}>
            {children}
        </button>
    )
}

export default Button
