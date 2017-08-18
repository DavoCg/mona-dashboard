import React from 'react';
import {css} from 'aphrodite';
import style from './style';

const item = (data, i, props) => {
    const current = i === props.active && style.current;
    return (
        <div onClick={() => props.onChange(i)}
             className={css(style.item, data.last && style.last)}>
            <i className={css(style.icon, current) + ` icon-${data.icon}`}/>
            <span className={css(style.text, current)}>{data.name}</span>
        </div>
    );
};

export default (props) => (
    <div className={css(style.container)}>
        <div className={css(style.header)}>
            <img className={css(style.image)}
                 src={'https://scontent-cdg2-1.cdninstagram.com/t51.2885-19/s320x320/16584022_1315640315179035_1687232315450720256_a.jpg'}
                 alt={'profile picture'}/>
            <p className={css(style.text)}>David Cingala</p>
        </div>
        <div className={css(style.content)}>
            {props.items.map((data, i) => item(data, i, props))}
        </div>
    </div>
);
