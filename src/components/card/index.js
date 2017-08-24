import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import {cs} from './../../constants/style';
import {Image} from './../../components';

export default ({onClick, data: {pictures, description, price}}) => (
    <div onClick={onClick}
         className={css(style.container) + ' col-xs-12 col-sm-8 col-md-6 col-lg-4'}>
        <div className={css(cs.box, style.content)}>
            <div className={css(style.imageContainer)}>
                <Image source={pictures[0]}/>
                <div className={css(style.over)}>
                    <p className={css(style.tag)}>{`${price} €`}</p>
                </div>
            </div>
            <div className={css(style.infos)}>
                <p className={css(style.description)}>{description}</p>
            </div>
        </div>
    </div>
);