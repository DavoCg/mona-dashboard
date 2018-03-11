import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import {cs} from '../../constants/style';
import {InstagramConnect} from '../../components';

const item = (data, i, props) => {
    const current = i === props.active && style.current;
    return (
        <div onClick={() => {props.onChange(i); data.handler()}}
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
                 src={'https://stripe.com/img/about/logos/logos/blue.png'}
                 alt={'profile picture'}/>
        </div>
        <div className={css(style.content)}>
            {props.items.map((data, i) => item(data, i, props))}
        </div>
    </div>
);
