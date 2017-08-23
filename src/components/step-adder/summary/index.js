import React from 'react';
import {css} from 'aphrodite';
import {Image} from '../../../components';
import style from './style';

const DEFAULT_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis eligendi eveniet inventore minima officia quos. A cum, ea ex expedita illum.';

export default (props) => {
    const {pictures, description, price} = props;

    console.log('description :', description);
    
    return(
        <div>
            <p className={css(style.title)}>{'Pictures'}</p>
            <div className={css(style.images)}>
                <div style={{flexGrow: 2.06}}>
                    <Image source={pictures[0] && pictures[0].source}/>
                </div>
                <div style={{flexGrow: 1}}>
                    <Image source={pictures[1] && pictures[1].source}/>
                    <Image source={pictures[2] && pictures[2].source}/>
                </div>
            </div>
            <p className={css(style.title)}>{'Description'}</p>
            <div className={css(style.description)}>
                <p className={css(style.descriptionText)}>
                    {description || DEFAULT_DESCRIPTION}
                </p>
            </div>
            <p className={css(style.title)}>{'Price'}</p>
            <div className={css(style.price)}>
                <p className={css(style.priceText)}>
                    {price > 0 ? `${price}€` : 'No value yet'}
                </p>
            </div>
        </div>
    );
}