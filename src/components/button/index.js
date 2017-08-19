import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default ({onClick, theme = 'pop', style: cs, text, full}) => (
    <div onClick={onClick}
         className={css(style.container, cs, full && style.full, style[theme])}>
        <p className={css(style.text)}>{text}</p>
    </div>
);