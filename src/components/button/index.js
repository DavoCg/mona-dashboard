import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default (props) => (
    <div onClick={props.onClick}
         className={css(style.container, props.style)}>
        <p className={css(style.text)}>{props.text}</p>
    </div>
);