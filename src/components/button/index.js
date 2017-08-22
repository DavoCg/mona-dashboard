import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default ({onClick, theme = 'pop', style: cs, text, full, disabled}) => (
    <button disabled={disabled}
            onClick={onClick}
            className={css(style.container, cs, full && style.full, style[theme], disabled && style.disabled)}>
        <p className={css(style.text)}>{text}</p>
    </button>
);