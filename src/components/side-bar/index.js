import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default (props) => (
    <div className={css(style.container)}>
        <div className={css(style.header)}>
            <img className={css(style.image)}
                 src={'https://scontent-cdg2-1.cdninstagram.com/t51.2885-19/s320x320/16584022_1315640315179035_1687232315450720256_a.jpg'}
                 alt={'profile picture'}/>
            <p>David Cingala</p>
        </div>
    </div>
);