import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import {cs} from '../../constants/style';

const close = (onClose) => {
    return (e) => {
        console.log('overlay click')
        e.stopPropagation();
        return onClose();
    }
};

export default ({children, open, onClose}) => {
    return (
        <div onClick={close(onClose)}
             className={css(style.overlay, !open && style.close)}>
            <div className={css(cs.box, style.content)}>
                {children}
            </div>
        </div>
    );
};