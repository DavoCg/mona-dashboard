import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default (props) => (
    <div className={css(style.container)}>
        <div className={css(style.content)}>
            <i className={css(style.icon) + ' icon-picture'}/>
        </div>
    </div>
);