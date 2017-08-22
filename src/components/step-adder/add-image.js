import React from 'react';
import {css} from 'aphrodite';
import {Image} from '../../components';
import style from './add-image-style';

export default (props) => {
    const {} = props;
    return(
        <div>
            <div className={css(style.images)}>
                <div style={{flexGrow: 2.02}}>
                    <Image/>
                </div>
                <div style={{flexGrow: 1}}>
                    <Image/>
                    <Image/>
                </div>
            </div>
        </div>
    );
}