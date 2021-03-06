import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default (props) => (
    <input {...props}
           className={css(style.container)}
           placeholder={props.placeholder}
           type={props.type || 'text'}/>
);