import React from 'react';
import {css} from 'aphrodite';
import style from './progress-style';

const dot = (data, i, active) => {
    return <div className={css(style.dot, i <= active && style.dotActive)}></div>;
};

const title = (data, i, active) => {
    return <p className={css(style.dotTitle, i <= active && style.activeTitle)}>{data.name}</p>;
};

export default (props) => {
    const {steps, active = 1} = props;
    const progress = active / (steps.length - 1) * 100;

    return(
        <div className={css(style.container)}>
            <div className={css(style.progress)}>
                <div style={{width: `${progress}%`}}
                     className={css(style.avancement, style.active)}></div>
                {steps.map((data, i) => dot(data, i, active))}
            </div>
            <div className={css(style.titles)}>
                {steps.map((data, i) => title(data, i, active))}
            </div>
        </div>

    )
}