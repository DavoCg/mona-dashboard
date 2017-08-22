import React from 'react';
import {css} from 'aphrodite';
import {Image} from '../../components';
import style from './summary-style';

export default (props) => {
    const {} = props;
    return(
        <div>
            <p className={css(style.title)}>{'Pictures'}</p>
            <div className={css(style.images)}>
                <div style={{flexGrow: 2.06}}>
                    <Image/>
                </div>
                <div style={{flexGrow: 1}}>
                    <Image/>
                    <Image/>
                </div>
            </div>
            <p className={css(style.title)}>{'Description'}</p>
            <div className={css(style.description)}>

            </div>
            <p className={css(style.title)}>{'Price'}</p>
            <div className={css(style.price)}>

            </div>
        </div>
    );
}